const { PrismaClient } = require("../../prisma/generated/pro-client");
const prisma = new PrismaClient({ log: ["warn", "error"] });

const verificationResponse = async (req, res) => {
  const { formId, respondentId, responses } = req.body;

  if (!formId || !responses || typeof responses !== "object") {
    return res.status(400).json({ error: "Invalid request payload" });
  }

  try {
    // Step 1: Fetch the form details and validate constraints
    const form = await prisma.verificationForm.findUnique({
      where: { id: formId },
      include: {
        verificationResponse: true, // Include responses to count them
      },
    });

    if (!form) {
      return res.status(404).json({ error: "VerificationForm not found" });
    }

    // Check if the form has expired
    if (new Date() > new Date(form.expiryDate)) {
      return res.status(400).json({ error: "This form has expired." });
    }

    // Check if the maximum number of responses has been reached
    if (form.verificationResponse.length >= form.max) {
      return res.status(400).json({ error: "Maximum responses have been reached for this form." });
    }

    // Step 2: Fetch the active fields from the form
    const activeFields = Object.entries(form)
      .filter(([key, value]) => typeof value === "boolean" && value)
      .map(([key]) => key);

    // Step 3: Validate the response keys
    const invalidFields = Object.keys(responses).filter(
      (key) => !activeFields.includes(key)
    );

    if (invalidFields.length > 0) {
      return res.status(400).json({
        error: "Invalid fields provided",
        invalidFields,
      });
    }

    // Step 4: Save the validated response in the database
    const response = await prisma.verificationResponse.create({
      data: {
        formId,
        respondentId,
        responses, // Save the validated key-value pairs as JSON
      },
    });

    res.status(201).json({
      message: "Response submitted successfully",
      response,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Start verification

module.exports = {
  verificationResponse,
};
