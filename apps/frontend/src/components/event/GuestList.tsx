import { Guest } from "core";
import { ItemGuest } from "./ItemGuest";

type GuestListProps = {
    guests: Guest[];
}

export const GuestList = ({ guests }: GuestListProps) => {
    return (
        <div>
            <ul className="flex flex-col gap-2">

                {guests.map((guest) => (
                    <ItemGuest key={guest.id} guest={guest} />
                ))}
            </ul>
        </div>
    )
}
