/*
  Warnings:

  - You are about to drop the `Application` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecentActivities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "VerificationType" AS ENUM ('PERSONNEL', 'LOAN', 'CRIMINALRECORD');

-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "Log_applicationId_applicationName_fkey";

-- DropForeignKey
ALTER TABLE "RecentActivities" DROP CONSTRAINT "RecentActivities_applicationId_applicationName_fkey";

-- DropForeignKey
ALTER TABLE "RecentActivities" DROP CONSTRAINT "RecentActivities_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_companyId_fkey";

-- DropTable
DROP TABLE "Application";

-- DropTable
DROP TABLE "Log";

-- DropTable
DROP TABLE "RecentActivities";

-- DropTable
DROP TABLE "Transaction";

-- CreateTable
CREATE TABLE "Verification" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "verificationType" "VerificationType" NOT NULL,

    CONSTRAINT "Verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "verificationId" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Field" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "selectedFields" (
    "id" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,

    CONSTRAINT "selectedFields_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Verification" ADD CONSTRAINT "Verification_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_verificationId_fkey" FOREIGN KEY ("verificationId") REFERENCES "Verification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "selectedFields" ADD CONSTRAINT "selectedFields_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
