function validatePhoneNumber(phoneNumber) {
    // Regular expression for Indian phone number (10 digits starting with 7, 8, or 9)
    const indianPhoneNumberRegex = /^[789]\d{9}$/;
  
    // Test the phone number against the regular expression
    return indianPhoneNumberRegex.test(phoneNumber);
  }
  
  // Example usage:
  const phoneNumberToValidate = "9876543210"; // Replace with the phone number you want to validate
  const isValid = validatePhoneNumber(phoneNumberToValidate);
  
  if (isValid) {
    console.log(`${phoneNumberToValidate} is a valid Indian phone number.`);
  } else {
    console.log(`${phoneNumberToValidate} is not a valid Indian phone number.`);
  }
  