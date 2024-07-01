const createVerificationRecord = require("./createVerificationRecord");

const handleRecordResponse = (userId, title, personnel_name, type, result) => {
  console.log("Record will be created");
  //   const record = await createVerificationRecord(
  //     userId,
  //     title,
  //     personnel_name,
  //     type,
  //     result.data
  //   );

  console.log("Record created");

  //   return record;
};

module.exports = handleRecordResponse;
