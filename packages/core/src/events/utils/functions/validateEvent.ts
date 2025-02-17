import { Event } from "@/events/models";

export function validateEvent(event: Partial<Event>): string[] {
    const errors: string[] = [];


    if (!event.alias) {
        errors.push("Alias is required");
    }

    if (!event.name) {
        errors.push("Name is required");
    }

    if (!event.date) {
        errors.push("Date is required");
    }

    if (!event.description) {
        errors.push("Description is required");
    }

    if (!event.location) {
        errors.push("Location is required");
    }

    if (!event.expectedParticipants || event.expectedParticipants < 1) {
        errors.push("Expected participants is required");
    }

    if (!event.image) {
        errors.push("Image is required");
    }

    if (!event.backgroundImage) {
        errors.push("BackgroundImage is required");
    }

    return errors;
}