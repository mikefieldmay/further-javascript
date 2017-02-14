function aNoteControllerCanBeInstantiated(){
  listModel = new List();
  var noteController = new NoteController(listModel);
  assert.isTrue(listModel.notes().length === 1);
};

aNoteControllerCanBeInstantiated();

function showsNoteOnAPage(){
  listModel = new List();
  var noteController = new NoteController(listModel);
  document.getElementById = function(){
    return {}
  };
  noteController.htmlInserter()
  assert.isTrue(noteController.elem.innerHTML === '<ul><li><div>This is my note</div></li></ul>')
}

showsNoteOnAPage();
