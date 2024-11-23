import { Guest } from "../../models";
import { validateGuest } from "./validateGuest";

export function complementGuest(guest: Partial<Guest>): Guest {
    const errors = validateGuest(guest);

    if (errors.length) {
        throw new Error(errors.join("\n"));
    }

    const qtdPlusOne = guest.qtdPlusOne ?? 0;
    const hasPlusOne = (guest.hasPlusOne && guest.confirmed && qtdPlusOne > 0) ?? false;

    const updatedGuest: Guest = {
        ...guest,
        qtdPlusOne: hasPlusOne ? qtdPlusOne : 0,
        hasPlusOne,
    } as Guest;

    return updatedGuest;
}