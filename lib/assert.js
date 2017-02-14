var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
     console.log("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else {
     console.log("Your " + (assertionToCheck) + "test has passed!");
    }
  }
};
