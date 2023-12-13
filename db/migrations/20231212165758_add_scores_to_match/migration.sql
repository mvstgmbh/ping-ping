/*
  Warnings:

  - Added the required column `scorePlayerA` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scorePlayerB` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "scorePlayerA" INTEGER NOT NULL,
ADD COLUMN     "scorePlayerB" INTEGER NOT NULL;
