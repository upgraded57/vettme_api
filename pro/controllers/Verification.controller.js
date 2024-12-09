const { PrismaClient } = require("../../prisma/generated/pro-client");
const prisma = new PrismaClient({ log: ["warn", "error"] });

//create verification form:
const createVerificationForm = async (req, res) => {
  const {
    title,
    companyId,
	max,
    verificationType,
    piFullname,
    piDateOfBirth,
    piGender,
    piNationality,
    piResidentialAddress,
    piPhoneNumber,
    piEmailAddress,
    piNationalIdentificationNumber,
    piMaritalStatus,
    piNextofKinName,
    piNextofKinRelationship,
    piNextofKinPhoneNumber,
    giFullName,
    giRelationshiptoPersonnel,
    giOccupation,
    giPhoneNumber,
    giResidentialAddress,
    giEmailAddress,
    giYearsKnown,
    giNationalIdenificationNumber,
    aiHighestQualification,
    aiNameofInstitution,
    aiYearofGraduation,
    aiDegreeOrCertificationUpload,
    aiProfessionalCertifications,
    priCurrentJob,
    priOrganizationName,
    priEmploymentStartDate,
    priEmploymentType,
    priJobResponsibility,
    priProfessionalSkills,
    priLinkedInProfile,
    priProfessionalReferenceName,
    priProfessionalReferencePhoneNumber,
    priCurrentSalary,
    priExpectedSalaryRange,
    mhaCurrentMentalHealthCondition,
    mhaHistoryofMentalHealthConditions,
    mhaAreYouCurrentlyUnderAnyMedicationOrTreatment,
    mhaHaveYouHadAnyPreviousPsychiatricConsultations,
    mhaHaveYouExperiencedAnyMajorTraumaInThePastYear,
    mhaEmotionalWellbeing,
    verificationResponse
  } = req.body;

  try{
	//Check if companyId exists
	const company = await prisma.company.findUnique({
		where: { id: companyId }
	})

	if (!company){
		return res.status(404).json({message: 'Company not Found'})
	}

	//creating the verification form  with companyId
	const newVerification = await prisma.verificationForm.create({
		data : {
			title,
			companyId,
			verificationType,
			max,
			...{
			  piFullname,
			  piDateOfBirth,
			  piGender,
			  piNationality,
			  piResidentialAddress,
			  piPhoneNumber,
			  piEmailAddress,
			  piNationalIdentificationNumber,
			  piMaritalStatus,
			  piNextofKinName,
			  piNextofKinRelationship,
			  piNextofKinPhoneNumber,
			  giFullName,
			  giRelationshiptoPersonnel,
			  giOccupation,
			  giPhoneNumber,
			  giResidentialAddress,
			  giEmailAddress,
			  giYearsKnown,
			  giNationalIdenificationNumber,
			  aiHighestQualification,
			  aiNameofInstitution,
			  aiYearofGraduation,
			  aiDegreeOrCertificationUpload,
			  aiProfessionalCertifications,
			  priCurrentJob,
			  priOrganizationName,
			  priEmploymentStartDate,
			  priEmploymentType,
			  priJobResponsibility,
			  priProfessionalSkills,
			  priLinkedInProfile,
			  priProfessionalReferenceName,
			  priProfessionalReferencePhoneNumber,
			  priCurrentSalary,
			  priExpectedSalaryRange,
			  mhaCurrentMentalHealthCondition,
			  mhaHistoryofMentalHealthConditions,
			  mhaAreYouCurrentlyUnderAnyMedicationOrTreatment,
			  mhaHaveYouHadAnyPreviousPsychiatricConsultations,
			  mhaHaveYouExperiencedAnyMajorTraumaInThePastYear,
			  mhaEmotionalWellbeing
			}
		  }
	})

	  // Step 3: Optionally, create verification results if provided
	  if (verificationResponse && verificationResponse.length > 0) {
		const results = await prisma.verificationResponse.createMany({
			data: verificationResponse.map(({ respondentId, responses }) => ({
				formId: newVerification.id,
				respondentId,
				responses
			  }))
		});
	  }
	  // Return the created VerificationForm
	  res.status(201).json({
		message: 'Verification Form created successfully',
		data: newVerification,
	  });
  } catch(err){
	console.error(err)
	res.status(500).json({message: "Internal Server Error"})
  }


};


module.exports = {
	createVerificationForm
  };