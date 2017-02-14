(function(exports) {

  function List() {
    this._notes = [];
  };

  List.prototype.notes = function(){
    return this._notes;
  };

  List.prototype.addNote = function(text){
    this._notes.push(new Note(text));
  };

  exports.List = List
})(this);
