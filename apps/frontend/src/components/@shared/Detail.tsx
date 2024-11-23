import React from "react"

type DetailProps = {
    label: string
    children: React.ReactNode
}

export const Detail = ({ children, label }: DetailProps) => {
    return (
        <div className="flex-1 flex flex-col items-start border border-zinc-800 px-6 py-3 rounded-lg">
            <span className="text-zinc-400 font-bold">{label}</span>
            <div className="text-xl">
                {children}
            </div>
        </div>
    )
}
