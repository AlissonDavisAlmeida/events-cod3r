import { PrismaClient } from '@prisma/client';
import { events } from 'core';

async function seed() {
  const prisma = new PrismaClient();

  const transactions = events.map(async (event) => {
    await prisma.event.create({
      data: {
        name: event.name,
        description: event.description,
        date: event.date,
        location: event.location,
        alias: event.alias,
        backgroundImage: event.backgroundImage,
        expectedParticipants: event.expectedParticipants,
        image: event.image,
        password: event.password,
        id: event.id,
        guests: {
          create: event.guests.map((guest) => ({
            id: guest.id,
            name: guest.name,
            email: guest.email,
            confirmed: guest.confirmed,
            hasPlusOne: guest.hasPlusOne,
            qtdPlusOne: guest.qtdPlusOne,
          })),
        },
      },
    });
  });

  await Promise.all(transactions);
}

seed();
