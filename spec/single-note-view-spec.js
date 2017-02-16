function noteViewTest() {
  
  function NoteDouble(){}
  NoteDouble.prototype = {
    text: function(){
      return 'This is my example note'
    }
  }
  var note = new NoteDouble()
  var noteView = new NoteView(note)

  function instantiatesSingleNoteView(){

    assert.isTrue(noteView._note === note)
  }

  instantiatesSingleNoteView()

  function showsSingleNoteOnPage(){
    assert.isTrue(noteView.viewNote() === '<div>This is my example note</div>')
  }

  showsSingleNoteOnPage()
}

noteViewTest()
