-- AlterTable
ALTER TABLE "VerificationForm" ADD COLUMN     "expiryDate" TIMESTAMP(3) NOT NULL DEFAULT NOW() + INTERVAL '20 days',
ADD COLUMN     "max" INTEGER NOT NULL DEFAULT 0;