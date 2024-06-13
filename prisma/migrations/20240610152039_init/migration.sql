/*
  Warnings:

  - Made the column `isActive` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `isActive` BOOLEAN NOT NULL DEFAULT false;
