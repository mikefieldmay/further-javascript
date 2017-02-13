(function(exports) {

  function List() {
    this._notes = [];
  };

  List.prototype.notes = function(){
    return this._notes;
  };

  exports.List = List
})(this);
