/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { EventDashboard } from "@/components/event/EventDashboard"
import { EventPasswordForm } from "@/components/event/EventPasswordForm"
import { Event, events } from "core"
import { use, useEffect, useState } from "react"

export default function AdminEventPage(props: any) {
  const params = use<any>(props.params)

  const id = params.allParams[0]
  const [event, setEvent] = useState<Event | null>(null)
  const [password, setPassword] = useState<string | null>(params.allParams[1] ?? null)

  const confirmedGuests = event?.guests.filter(guest => guest.confirmed) ?? []
  const unconfirmedGuests = event?.guests.filter(guest => !guest.confirmed) ?? []

  const totalGuests = confirmedGuests.reduce((acc, guest) => acc + guest.qtdPlusOne + 1, 0) ?? 0


  function loadEvent() {
    const event = events.find(event => event.id === id && event.password === password)

    if (event) {
      setEvent(event)
    }
  }

  useEffect(() => {
    loadEvent()
  }, [id])

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <EventDashboard
          event={event}
          absentGuests={unconfirmedGuests}
          guestsPresent={confirmedGuests}
          totalGuests={totalGuests}
        />
      ) : (
        <EventPasswordForm />
      )}
    </div>
  )

}
