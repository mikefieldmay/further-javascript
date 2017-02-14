var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
     console.log("%cAssertion failed: is not truthy", 'color: red');
    }
    else {
     console.log("%cYour test has passed!", 'color: green');
    }
  }
};
