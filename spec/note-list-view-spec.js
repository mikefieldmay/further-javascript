function viewDisplaysListOfNotes() {
  var newList = new List();
  newList.addNote("This is my note");
  newList.addNote("This is my other note");
  var listView = new ListView(newList);
  var htmlString = '<ul><li><div>This is my note</div></li><li><div>This is my other note</div></li></ul>'
  assert.isTrue(listView.viewNotes() === htmlString);
}

viewDisplaysListOfNotes()

function viewDisplaysASingleNote() {
  var newList = new List();
  newList.addNote("This is my note");
  var listView = new ListView(newList);
  var htmlString = '<ul><li><div>This is my note</div></li></ul>'
  assert.isTrue(listView.viewNotes() === htmlString);
}

viewDisplaysASingleNote()

function viewDisplaysLongListOfNotes() {
  var newList = new List();
  newList.addNote("This is my note");
  newList.addNote("This is my other note");
  newList.addNote("This is my third note");
  var listView = new ListView(newList);
  var htmlString = '<ul><li><div>This is my note</div></li><li><div>This is my other note</div></li><li><div>This is my third note</div></li></ul>'
  assert.isTrue(listView.viewNotes() === htmlString);
}

viewDisplaysLongListOfNotes()

function viewDisplaysNothingWhenNoNotes() {
  var newList = new List();
  var listView = new ListView(newList);
  var htmlString = '<ul></ul>'
  assert.isTrue(listView.viewNotes() === htmlString);
}

viewDisplaysNothingWhenNoNotes()
