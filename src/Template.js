function Template(template) {
  return {
    _tpl: template,
    render: function(data) {
      var result = this._tpl;
      for (var key in data) {
        result = result.replace(new RegExp("\{"+key+"\}", "g"), data[key]);
      }
      return result;
    }
  }
}
