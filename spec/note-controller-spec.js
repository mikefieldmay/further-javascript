function noteControllerTests() {
  console.log('%cNote Controller Tests', 'color: blue');

  var note = {
    text: function(){
      return 'This is my note'
    }
  }
  var listView = {
    viewNotes: function(){
      return '<ul><a href="#note/12"><li><div>This is my note</div></li></a></ul>'
    },
    list: function(){
      return [note]
    }
  }
  var dummyElement = document.createElement('div')
  var otherDummyElement = document.createElement('div')
  function LocationDouble(){
    this.hash = "#note/0"
  }
  var location = new LocationDouble
  var noteController = new NoteController(listView, dummyElement, otherDummyElement, location);

    function showsNotesListOnAPage(){
      console.log('showsNotesListOnAPage')
      noteController.htmlInserter()
      assert.isTrue(noteController.list.innerHTML === '<ul><a href="#note/12"><li><div>This is my note</div></li></a></ul>')
    }

    showsNotesListOnAPage();

    function showNoteOnPage(){
      console.log('showNoteOnPage')
      var noteController = new NoteController(listView, dummyElement, otherDummyElement, location);
      noteController.showNoteForCurrentPage()
      assert.isTrue(noteController.note.innerHTML === '<div>This is my note</div>')
    }

    showNoteOnPage()

    function listensForHashChange() {

      console.log(window)
      var windowDouble = {
        addEventListener: function (){
          NoteController.showNoteForCurrentPage()
        }
      }
      noteController.changeNoteByURL(window)

    }

    listensForHashChange()

}

noteControllerTests()
