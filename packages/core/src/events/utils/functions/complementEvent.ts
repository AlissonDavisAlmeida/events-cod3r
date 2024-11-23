import { Event } from "@/events/models";
import { validateEvent } from "./validateEvent";
import { Id, Password } from "@/@shared";

export function complementEvent(partialEvent: Partial<Event>): Event {
    const errors = validateEvent(partialEvent);

    if (errors.length > 0) {
        throw new Error(errors.join("\n"));
    }

    const event: Event = {
        ...partialEvent,
        id: partialEvent.id ?? Id.new(),
        password: partialEvent.password ?? Password.generate(20),
        expectedParticipants: Number(partialEvent.expectedParticipants ?? 1),
    } as Event;

    return event;
}