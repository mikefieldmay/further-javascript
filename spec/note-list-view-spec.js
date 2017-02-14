function viewDisplaysListOfNotes() {
  var newList = new List();
  newList.addNote("This is my note");
  newList.addNote("This is my other note");
  var listView = new ListView(newList);
  var htmlString = '<ul><li><div>This is my note</div></li><li><div>This is my other note</div></li></ul>'
  assert.isTrue(listView.viewNotes() === htmlString);
}

viewDisplaysListOfNotes()
