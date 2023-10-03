/*
  Warnings:

  - You are about to drop the column `adress` on the `Sports_Gym` table. All the data in the column will be lost.
  - Added the required column `address` to the `Sports_Gym` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sports_Gym" DROP COLUMN "adress",
ADD COLUMN     "address" TEXT NOT NULL;
