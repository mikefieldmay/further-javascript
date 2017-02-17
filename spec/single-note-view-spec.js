function noteViewTest() {
  console.log("%cnote view test", 'color: blue')

  var noteDouble = {
    text: function(){
      return 'This is my example note'
    }
  }

  var noteView = new NoteView(noteDouble)

  function instantiatesSingleNoteView(){
    console.log('instantiateSingleNoteView')
    assert.isTrue(noteView._note === noteDouble)
  }

  instantiatesSingleNoteView()

  function showsSingleNoteOnPage(){
    console.log('showsSingleNoteOnPage')
    assert.isTrue(noteView.viewNote() === '<div>This is my example note</div>')
  }

  showsSingleNoteOnPage()
}

noteViewTest()
