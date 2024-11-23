import { Id } from "@/@shared";
import { Event } from "@/events/models";

export function createEmptyEvent(): Partial<Event> {
    return {
        id: Id.new(),
        name: '',
        description: '',
        date: new Date(),
        location: '',
        expectedParticipants: 1,
    }
}