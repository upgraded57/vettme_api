/*
  Warnings:

  - You are about to drop the column `date` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `verification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `otp` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `date`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `verification` DROP COLUMN `date`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
