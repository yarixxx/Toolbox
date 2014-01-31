function ObjectValidator () {
  var _model;

  var publicMethods = {
    setModel: function(model) {
      _model = model;
    },
    ensureImplements: function(vObject) {
      for (var key in _model) {
        if (!(typeof vObject[key] === _model[key])) {
          return false;
        }
      }
      return true;
    }
  };
  return publicMethods;
};
