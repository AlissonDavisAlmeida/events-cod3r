import { BadRequestException, Body, Controller, Get, Param, Post, UnauthorizedException } from '@nestjs/common';
import { complementEvent, complementGuest, DateFormat, Event, events, Guest, Id } from 'core';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {

  constructor(
    private readonly eventsService: EventsService
  ) { }

  @Post("access")
  async accessEvent(
    @Body() data: { id: string; password: string }
  ) {
    const event = await this.eventsService.findEventById(data.id, true);

    if (!event || event.password !== data.password) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return this.serialize(event);
  }

  @Get()
  async findEvents() {
    const events = await this.eventsService.findAllEvents();
    return events.map(this.serialize);
  }

  @Post("")
  async createEvent(@Body() event: Event) {
    const exists = await this.eventsService.findEventByAlias(event.alias, false);

    if (exists && exists.id !== event.id) {
      throw new BadRequestException("Event already exists with this alias");
    }

    if (exists) {
      throw new BadRequestException("Event already exists");

    }

    const fullEvent = complementEvent(this.deserialize(event));
    const eventAdded = await this.eventsService.save(fullEvent);
    return this.serialize(eventAdded);
  }

  @Get(':idOrAlias')
  async findEvent(@Param('idOrAlias') idOrAlias: string) {
    let event: Event
    if (Id.validate(idOrAlias)) {
      event = await this.eventsService.findEventById(idOrAlias, true);
    } else {
      event = await this.eventsService.findEventByAlias(idOrAlias, true);
    }
    return this.serialize(event);


  }

  @Get("validate/:alias/:id")
  async validateAlias(
    @Param("alias") alias: string,
    @Param("id") id: string
  ) {
    const event = await this.eventsService.findEventByAlias(alias, true);
    return { valid: !event || event.id === id };
  }

  @Post("save-guest/:alias")
  async saveGuest(
    @Param("alias") alias: string,
    @Body() guest: Guest
  ) {
    const event = await this.eventsService.findEventByAlias(alias, false);

    if (!event) {
      throw new BadRequestException("Event not found");
    }

    const fullGuest = complementGuest(guest);

    await this.eventsService.saveGuest(event, fullGuest);

    const eventWithGuests = await this.eventsService.findEventByAlias(alias, true);

    return this.serialize(eventWithGuests);
  }


  private serialize(event: Event) {
    if (!event) {
      return null;
    }
    return {
      ...event,
      date: DateFormat.format(event.date),
    };
  }

  private deserialize(event: any): Event {
    return {
      ...event,
      date: DateFormat.parse(event.date),
    };
  }
}
