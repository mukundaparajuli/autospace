/*
  Warnings:

  - You are about to drop the column `companyId` on the `Address` table. All the data in the column will be lost.
  - The primary key for the `Verification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Credentails` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id` to the `Verification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Credentails" DROP CONSTRAINT "Credentails_id_fkey";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "companyId";

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "rating" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Verification" DROP CONSTRAINT "Verification_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Verification_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Credentails";

-- CreateTable
CREATE TABLE "Credentials" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Credentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Credentials_email_key" ON "Credentials"("email");

-- AddForeignKey
ALTER TABLE "Credentials" ADD CONSTRAINT "Credentials_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
