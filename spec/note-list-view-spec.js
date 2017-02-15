function viewDisplaysListOfNotes() {
  console.log('viewDisplaysListOfNotes')
  var newList = new List();
  newList.addNote("This is my note");
  newList.addNote("This is my other note");
  var listView = new ListView(newList);
  var htmlString = "<ul><a href='note/5'><li><div>This is my note</div></li></a><a href='note/6'><li><div>This is my other not</div></li></a></ul>"
  assert.isTrue(listView.viewNotes() === htmlString);
}

viewDisplaysListOfNotes()

function viewDisplaysASingleNote() {
  console.log('viewDisplaysASingleNote')
  var newList = new List();
  newList.addNote("This is my note");
  var listView = new ListView(newList);
  var htmlString = "<ul><a href='note/7'><li><div>This is my note</div></li></a></ul>"
  assert.isTrue(listView.viewNotes() === htmlString);
}

viewDisplaysASingleNote()

function viewDisplaysLongListOfNotes() {
  console.log('viewDisplaysLongListOfNotes')
  var newList = new List();
  newList.addNote("This is my note");
  newList.addNote("This is my other note");
  newList.addNote("This is my third note");
  var listView = new ListView(newList);
  var htmlString = "<ul><a href='note/8'><li><div>This is my note</div></li></a><a href='note/9'><li><div>This is my other not</div></li></a><a href='note/10'><li><div>This is my third not</div></li></a></ul>"
  assert.isTrue(listView.viewNotes() === htmlString);
}

viewDisplaysLongListOfNotes()

function viewDisplaysNothingWhenNoNotes() {
  console.log('viewDisplaysNothingWhenNoNotes')
  var newList = new List();
  var listView = new ListView(newList);
  var htmlString = '<ul></ul>'
  assert.isTrue(listView.viewNotes() === htmlString);
}

viewDisplaysNothingWhenNoNotes()

function viewDisplaysOnlyFirstTwentyCharacters(){
  console.log('viewDisplaysOnlyFirstTwentyCharacters')
  var newList = new List();
  newList.addNote("This is my note. It is very long and I don't want all of it to be displayed");
  var listView = new ListView(newList);
  assert.isTrue(listView.viewNotes() === "<ul><a href='note/11'><li><div>This is my note. It </div></li></a></ul>");

}
viewDisplaysOnlyFirstTwentyCharacters()
