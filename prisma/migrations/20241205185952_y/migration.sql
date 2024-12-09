/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Field` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FormResponse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_verificationId_fkey";

-- DropForeignKey
ALTER TABLE "Field" DROP CONSTRAINT "Field_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "FormResponse" DROP CONSTRAINT "FormResponse_fieldId_fkey";

-- DropForeignKey
ALTER TABLE "FormResponse" DROP CONSTRAINT "FormResponse_verificationForm_fkey";

-- AlterTable
ALTER TABLE "VerificationForm" ADD COLUMN     "aiDegreeOrCertificationUpload" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "aiHighestQualification" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "aiNameofInstitution" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "aiProfessionalCertifications" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "aiYearofGraduation" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "giEmailAddress" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "giFullName" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "giNationalIdenificationNumber" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "giOccupation" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "giPhoneNumber" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "giRelationshiptoPersonnel" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "giResidentialAddress" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "giYearsKnown" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mhaAreYouCurrentlyUnderAnyMedicationOrTreatment" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mhaCurrentMentalHealthCondition" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mhaEmotionalWellbeing" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mhaHaveYouExperiencedAnyMajorTraumaInThePastYear" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mhaHaveYouHadAnyPreviousPsychiatricConsultations" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mhaHistoryofMentalHealthConditions" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "peiCurrentJob" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "piDateOfBirth" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "piEmailAddress" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "piFullname" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "piGender" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "piMaritalStatus" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "piNationalIdentificationNumber" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "piNationality" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "piNextofKinName" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "piNextofKinPhoneNumber" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "piNextofKinRelationship" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "piPhoneNumber" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "piResidentialAddress" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priCurrentSalary" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priEmploymentStartDate" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priEmploymentType" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priExpectedSalaryRange" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priJobResponsibility" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priLinkedInProfile" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priOrganizationName" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priProfessionalReferenceName" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priProfessionalReferencePhoneNumber" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priProfessionalSkills" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Field";

-- DropTable
DROP TABLE "FormResponse";

-- CreateTable
CREATE TABLE "VerificationResponse" (
    "id" TEXT NOT NULL,
    "formId" TEXT NOT NULL,
    "respondentId" TEXT NOT NULL,
    "responses" JSONB NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationResponse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VerificationResponse" ADD CONSTRAINT "VerificationResponse_formId_fkey" FOREIGN KEY ("formId") REFERENCES "VerificationForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
