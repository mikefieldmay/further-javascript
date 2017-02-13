(function(exports) {

  function Note(string) {
    this._text = (string)
  };

   Note.prototype.text = function() {
    return this._text
  };

  exports.Note = Note;
})(this);
