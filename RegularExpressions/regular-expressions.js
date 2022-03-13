const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const config = require("./config/config.json");

const checkValue = (value, regex) => {
  return value.match(regex) ? "VALID" : "NOT valid";
};

console.log();
console.log("*****************************************************************");
console.log("******* Working With Regular Expressions Programmatically *******");
console.log("*****************************************************************");
console.log();

console.log("========== Phone Number Pattern Validation ===========");
const phoneRegex = config.phoneNumberRegex;
console.log(`Regular Expression: ${phoneRegex}\n`);
readline.question(`Please enter a phone number:`, (phoneNumber) => {
  console.log(`Phone number: ${phoneNumber} is ${checkValue(phoneNumber, phoneRegex)}`);
  console.log();

  console.log("========== Email Address Pattern Validation ===========");
  const emailRegex = config.emailAddressRegex;
  console.log(`Regular Expression: ${emailRegex}\n`);
  readline.question(`Please enter an Email address:\n`, (emailAddress) => {
    console.log(`Email address: ${emailAddress} is ${checkValue(emailAddress, emailRegex)}`);
    console.log();

    console.log("========== URL Pattern Validation ===========");
    const urlRegex = config.urlRegex;
    console.log(`Regular Expression: ${urlRegex}\n`);
    readline.question(`Please enter a URL:\n`, (url) => {
      console.log(`URL: ${url} is ${checkValue(url, urlRegex)}`);
      console.log();
      readline.close();
    });
  });
});

console.log();
