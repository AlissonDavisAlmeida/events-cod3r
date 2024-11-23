import { Event, Guest } from "core"
import { EventDetails } from "./EventDetails"
import { AccessQrCode } from "./AccessQrCode"
import { Statistic } from "../@shared/Statistic"
import { GuestList } from "./GuestList"

type EventDashboardProps = {
    event: Event
    guestsPresent: Guest[]
    absentGuests: Guest[]
    totalGuests: number
}

export const EventDashboard = ({ event, guestsPresent, totalGuests, absentGuests }: EventDashboardProps) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 self-stretch">
                <EventDetails event={event} className="flex-1" />
                <AccessQrCode event={event} />
            </div>
            <div className="grid grid-cols-3 gap-6 mt-4">
                <Statistic
                    text="Guests expectations: "
                    value={event.expectedParticipants}
                    image="/icones/convidados.svg"
                />
                <Statistic
                    text="Confirmed: "
                    value={guestsPresent.length}
                    image="/icones/confirmados.svg"
                />
                <Statistic
                    text="total confirmed: "
                    value={totalGuests}
                    image="/icones/acompanhantes.svg"
                />
            </div>

            <button className="button blue self-end mt-12">
                <span>Update guest list</span>
            </button>

            <span className="flex py-2 text-xl font-bold text-white/80">
                Guests that confirmed their presence
            </span>
            <GuestList guests={guestsPresent} />
            <span className="flex py-2 text-xl font-bold text-white/80">
                Guests that confirmed their absence
            </span>
            <GuestList guests={absentGuests} />
        </div>
    )
}
