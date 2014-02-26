function MyView(selector) {
  this.selector = selector;
  this.domProvider = null;
  this.myModel = null;
}

/**
 *
 * @param domProvider {UseDOM}
 */
MyView.prototype.setDomProvider = function(domProvider) {
  this.domProvider = domProvider;
}

MyView.prototype.update = function(data) {
  this.domProvider.putValue(this.selector, data);
}

MyView.prototype.setMyModel = function(model) {
  this.myModel = model;
}

MyView.prototype.getDependencies = function() {
  return ["MyModel"];
}
