/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Field` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Response` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Verification` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `verificationId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "VerificationType" AS ENUM ('PERSONNEL', 'LOAN', 'CRIMINALRECORD');

-- DropForeignKey
ALTER TABLE "Field" DROP CONSTRAINT "Field_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_fieldId_fkey";

-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_verificationId_fkey";

-- DropIndex
DROP INDEX "Category_name_key";

-- DropIndex
DROP INDEX "Field_name_key";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
ADD COLUMN     "verificationId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Category_id_seq";

-- AlterTable
ALTER TABLE "Field" DROP CONSTRAINT "Field_pkey",
ADD COLUMN     "isSelected" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "categoryId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Field_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Field_id_seq";

-- DropTable
DROP TABLE "Response";

-- DropTable
DROP TABLE "Verification";

-- CreateTable
CREATE TABLE "VerificationForm" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "verificationType" "VerificationType" NOT NULL,

    CONSTRAINT "VerificationForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormResponse" (
    "id" TEXT NOT NULL,
    "verificationForm" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,

    CONSTRAINT "FormResponse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VerificationForm" ADD CONSTRAINT "VerificationForm_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_verificationId_fkey" FOREIGN KEY ("verificationId") REFERENCES "VerificationForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormResponse" ADD CONSTRAINT "FormResponse_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormResponse" ADD CONSTRAINT "FormResponse_verificationForm_fkey" FOREIGN KEY ("verificationForm") REFERENCES "VerificationForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
