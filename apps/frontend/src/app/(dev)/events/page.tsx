import { events } from "core"
import Image from "next/image"
import Link from "next/link"
import QRCode from "react-qr-code"


export default function Events() {
    return (
        <div className="grid grid-cols-3 gap-5">
            {events.map((event) => {
                return (
                    <div key={event.id} className="bg-zinc-800 rounded-lg flex flex-col w-full overflow-hidden">
                        <div className="relative w-full h-52">
                            <Image
                                src={event.image}
                                fill
                                alt={event.name}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col flex-1 p-7 gap-5 items-center text-center">
                            <span className="text-lg font-black">{event.name}</span>
                            <p className="flex-1 text-sm text-zinc-400">{event.description}</p>
                            <QRCode
                                value={JSON.stringify({ id: event.id, password: event.password })}
                                size={100}

                            />
                            <div className="flex gap-5 justify-between">
                                <Link
                                    className="button red flex-1"
                                    href={`/event/admin/${event.id}/${event.password}`}
                                >
                                    Admin
                                </Link>
                                <Link
                                    className="button green flex-1"
                                    href={`/invitation/${event.alias}`}
                                >
                                    Invitation
                                </Link>
                            </div>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}
