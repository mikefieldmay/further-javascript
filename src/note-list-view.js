(function(exports){
  function ListView(list) {
    this._list = list.notes()
  }

  ListView.prototype.viewNotes = function(){
    var string = ""
      for(i = 0; i < this._list.length; i++) {
        var id = this._list[i].id
       string +=  "<a href='note/" + id + "'><li><div>" + this._list[i].text().substr(0, 20) + "</div></li></a>"
      }
      console.log(string)
    return "<ul>" + string + "</ul>"
  }

exports.ListView = ListView;
})(this);
