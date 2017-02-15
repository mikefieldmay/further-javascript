function aNoteControllerCanBeInstantiated(){
  listModel = new List();
  var noteController = new NoteController(listModel, document);
  assert.isTrue(listModel.notes().length === 1);
};

aNoteControllerCanBeInstantiated();

function showsNoteOnAPage(){
  listModel = new List();
  var doc = document
  dummyElement = document.createElement('div')
  dummyElement.setAttribute("id", "app");
  doc.body.appendChild(dummyElement)
  var noteController = new NoteController(listModel, doc);
  console.log(doc.getElementById('app'))
  noteController.htmlInserter()
  console.log(dummyElement)
  assert.isTrue(dummyElement.innerHTML === '<ul><li><div>This is my note</div></li></ul>')
}

showsNoteOnAPage();
