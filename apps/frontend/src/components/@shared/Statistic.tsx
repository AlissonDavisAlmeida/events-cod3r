/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image"

type StatisticProps = {
    text: string
    value: any
    image: string
}

export const Statistic = ({ image, text, value }: StatisticProps) => {
    return (
        <div className="flex items-center bg-zinc-900 rounded-lg px-6 py-2.5 gap-5">
            <div className="flex-1 flex flex-col">
                <span className="font-light text-zinc-400">{text}</span>
                <span className="text-2xl font-black">{value}</span>
            </div>
            <Image
                src={image}
                alt={`icon`}
                width={80}
                height={80}
            />
        </div>
    )
}
