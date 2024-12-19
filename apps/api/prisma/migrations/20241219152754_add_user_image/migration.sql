/*
  Warnings:

  - You are about to drop the column `authProviderId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "authProviderId",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT;
