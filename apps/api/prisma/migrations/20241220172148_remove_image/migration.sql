/*
  Warnings:

  - You are about to drop the column `displayName` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Manager` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Valet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "displayName",
DROP COLUMN "image";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "Manager" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "Valet" DROP COLUMN "image";
