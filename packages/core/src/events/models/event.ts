import { Guest } from "./guest"

export interface Event {
    id: string
    alias: string
    password: string
    name: string
    date: Date
    location: string
    description: string
    image: string
    backgroundImage: string
    expectedParticipants: number
    guests: Guest[]
}