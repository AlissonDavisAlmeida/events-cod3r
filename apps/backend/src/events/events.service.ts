import { Injectable } from '@nestjs/common';
import { Event, Guest } from 'core';
import { Prisma } from 'db/prisma.provider';

@Injectable()
export class EventsService {
    constructor(
        private readonly prismaProvider: Prisma
    ) { }

    async save(event: Event) {
        return await this.prismaProvider.event.create({
            data: {
                name: event.name,
                description: event.description,
                date: event.date,
                location: event.location,
                alias: event.alias,
                backgroundImage: event.backgroundImage,
                expectedParticipants: event.expectedParticipants,
                image: event.image,
                password: event.password,
                id: event.id,
                guests: {
                  create: event.guests.map((guest) => ({
                    id: guest.id,
                    name: guest.name,
                    email: guest.email,
                    confirmed: guest.confirmed,
                    hasPlusOne: guest.hasPlusOne,
                    qtdPlusOne: guest.qtdPlusOne,
                  })),
                },
              },
            include: {
                guests: true
            }
        })
    }

    async saveGuest(event: Event, guest: Guest) {
        return await this.prismaProvider.guest.create({
            data: {
                ...guest,
                qtdPlusOne: Number(guest.qtdPlusOne ?? 0),
                event: {
                    connect: {
                        id: event.id
                    }
                }
            }
        })
    }

    async findAllEvents() {
        return await this.prismaProvider.event.findMany()
    }

    async findEventById(id: string, full = false) {
        return await this.prismaProvider.event.findUnique({
            where: {
                id
            },
            include: {
                guests: full
            }
        })
    }

    async findEventByAlias(alias: string, full = false) {
        return await this.prismaProvider.event.findUnique({
            select: {
                id: true,
                alias: true,
                name: true,
                date: true,
                description: true,
                image: true,
                backgroundImage: true,
                location: true,
                password: full,
                expectedParticipants: full,
                guests: full
            },
            where: {
                alias
            }

        })
    }




}
