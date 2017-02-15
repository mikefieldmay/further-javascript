function viewDisplaysListOfNotes() {
  console.log('viewDisplaysListOfNotes')
  var newList = new List();
  newList.addNote("This is my note");
  newList.addNote("This is my other note");
  var listView = new ListView(newList);
  var htmlString = '<ul><li><div>This is my note</div></li><li><div>This is my other not</div></li></ul>'
  assert.isTrue(listView.viewNotes() === htmlString);
}

viewDisplaysListOfNotes()

function viewDisplaysASingleNote() {
  console.log('viewDisplaysASingleNote')
  var newList = new List();
  newList.addNote("This is my note");
  var listView = new ListView(newList);
  var htmlString = '<ul><li><div>This is my note</div></li></ul>'
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
  var htmlString = '<ul><li><div>This is my note</div></li><li><div>This is my other not</div></li><li><div>This is my third not</div></li></ul>'
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
  assert.isTrue(listView.viewNotes() === '<ul><li><div>This is my note. It </div></li></ul>');

}
viewDisplaysOnlyFirstTwentyCharacters()
