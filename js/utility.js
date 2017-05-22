const Utility = {

  getDOM : function (_id) {
    return document.getElementById(_id);
  },

  HTML : function (_DOM, _content) {
    _DOM.innerHTML = _content;
  }

}
