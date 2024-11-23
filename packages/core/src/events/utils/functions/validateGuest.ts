import { Guest } from "@/events/models";

export function validateGuest(guest: Partial<Guest>): string[] {
    const errors: string[] = [];

    if (!guest.name) {
        errors.push("Name is required");
    }

    if (!guest.email) {
        errors.push("Email is required");
    }

    if (!guest.hasPlusOne) {
        guest.qtdPlusOne = 0;
    }

    if (guest.hasPlusOne && !guest.qtdPlusOne) {
        errors.push("QtdPlusOne is required");
    }

    

    return errors;
}