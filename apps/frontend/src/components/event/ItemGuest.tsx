import { Guest } from "core";

type ItemGuestProps = {
    guest: Guest;
}

export const ItemGuest = ({ guest }: ItemGuestProps) => {
    return (
        <li className="flex justify-between bg-black/40 rounded-md px-6 py-3 border border-zinc-800">
            <div className="flex flex-col">
                <span className="text-xl font-bold">{guest.name}</span>
                <span className="text-sm text-zinc-400">{guest.email}</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-zinc-400 text-sm">Companions</span>
                <span className="text-xl font-bold">{guest.qtdPlusOne}</span>
            </div>
        </li>
    )
}
