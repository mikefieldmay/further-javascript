(function(exports) {

  var idcounter = 0

  function Note(string) {
    this._text = (string)
    this.id = idcounter++;
  };

   Note.prototype.text = function() {
    return this._text
  };

  exports.Note = Note;
})(this);
