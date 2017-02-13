var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else {
     throw ("Your " + (assertionToCheck) + "test has passed!");
    }
  }
};
