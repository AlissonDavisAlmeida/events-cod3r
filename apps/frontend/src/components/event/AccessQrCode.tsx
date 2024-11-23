import { Event } from "core"
import QRCode from "react-qr-code"

type AccessQrCodeProps = {
    event: Event
}

export const AccessQrCode = ({ event }: AccessQrCodeProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 border border-zinc-800 px-10">
            <span className="text-sm font-light text-zinc-400">Access by mobile</span>
            <QRCode
                value={JSON.stringify({ id: event.id, password: event.password })}
                size={128}
                
            />
        </div>
    )
}
