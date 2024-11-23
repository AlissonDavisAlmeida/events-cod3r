import { Id } from "@/@shared";
import { Guest } from "@/events/models";

export function createEmptyGuest(): Partial<Guest>{
    return {
        id: Id.new(),
        name: '',
        email: '',
        confirmed: true,
        hasPlusOne: false,
        qtdPlusOne: 0,
    }
}