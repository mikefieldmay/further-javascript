// the list stores an array of notes. Has a method that returns the notes

function listHasArrayOfNotes() {
  var newList = new List();
  assert.isTrue(Array.isArray(newList.notes()));
}

listHasArrayOfNotes()
// list has a method that creates and stores a new single note
