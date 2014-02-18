function MyView(selector) {
  this.selector = selector;
  this.domProvider = null;
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
