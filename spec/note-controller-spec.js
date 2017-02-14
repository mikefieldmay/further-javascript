function aNoteControllerCanBeInstantiated(){
  listModel = new List();
  var noteController = new NoteController(listModel);
  console.log(listModel);
  assert.isTrue(listModel.notes().length === 1);
};

aNoteControllerCanBeInstantiated();

function showsNoteOnAPage(){
  listModel = new List();
  var noteController = new NoteController(listModel);
  console.log(listModel);
  document.getElementById = function(){
    return {}
  };
  var elem = {}
  elem.innerHTML = function(){
    return 'Hello'
  }
  console.log(1)
  console.log(elem.innerHTML())
  noteController.htmlInserter()
  console.log(2)
  console.log(elem.innerHTML())
}

showsNoteOnAPage();
