import { Event } from "core"
import { Detail } from "../@shared/Detail"

type EventDetailsProps = {
    event: Event
    className?: string
}

export const EventDetails = ({ event, className }: EventDetailsProps) => {
    return (
        <div className={`flex flex-col gap-2 ${className ?? ""}`}>
            <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
                <span className="text-2xl font-black">{event.alias}:</span>
                <span className="text-xl text-zinc-300">{event.name}</span>
            </div>
            <div className="flex gap-2">
                <Detail
                    label="Date:"
                >
                    <span>
                        {new Date(event.date).toLocaleDateString()}
                        {" "}
                        {new Date(event.date).toLocaleTimeString()}
                    </span>
                </Detail>
                <Detail label="Location:">{event.location}</Detail>
            </div>
            <div>
                <Detail label="Description:">{event.description}</Detail>
            </div>
        </div>
    )
}
