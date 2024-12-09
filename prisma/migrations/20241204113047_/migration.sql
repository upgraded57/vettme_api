/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `verificationId` on the `Category` table. All the data in the column will be lost.
  - The `id` column on the `Category` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Field` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Field` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Verification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `companyId` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `verificationType` on the `Verification` table. All the data in the column will be lost.
  - The `id` column on the `Verification` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `selectedFields` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Field` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `categoryId` on the `Field` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_verificationId_fkey";

-- DropForeignKey
ALTER TABLE "Field" DROP CONSTRAINT "Field_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Verification" DROP CONSTRAINT "Verification_companyId_fkey";

-- DropForeignKey
ALTER TABLE "selectedFields" DROP CONSTRAINT "selectedFields_fieldId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "verificationId",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Field" DROP CONSTRAINT "Field_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "categoryId",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD CONSTRAINT "Field_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Verification" DROP CONSTRAINT "Verification_pkey",
DROP COLUMN "companyId",
DROP COLUMN "title",
DROP COLUMN "verificationType",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Verification_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "selectedFields";

-- DropEnum
DROP TYPE "VerificationType";

-- CreateTable
CREATE TABLE "Response" (
    "id" SERIAL NOT NULL,
    "fieldId" INTEGER NOT NULL,
    "verificationId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Field_name_key" ON "Field"("name");

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_verificationId_fkey" FOREIGN KEY ("verificationId") REFERENCES "Verification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
