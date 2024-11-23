/*
  Warnings:

  - You are about to drop the `guests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "guests";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "guest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL,
    "hasPlusOne" BOOLEAN NOT NULL,
    "qtdPlusOne" INTEGER NOT NULL,
    "eventId" TEXT,
    CONSTRAINT "guest_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
