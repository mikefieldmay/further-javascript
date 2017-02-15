(function(exports){

  function NoteView(note){
    this._note = note
  }

  NoteView.prototype.viewNote = function() {
    return '<div>' + this._note.text() +'</div>'
  }

  exports.NoteView = NoteView
})(this)
