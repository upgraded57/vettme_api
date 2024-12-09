/*
  Warnings:

  - You are about to drop the column `peiCurrentJob` on the `VerificationForm` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "VerificationForm" DROP COLUMN "peiCurrentJob",
ADD COLUMN     "priCurrentJob" BOOLEAN NOT NULL DEFAULT false;
