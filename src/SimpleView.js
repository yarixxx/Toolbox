function SimpleView(selector) {
  console.log("SimpleView" + selector);
  this.selector = selector;
  this.domElement = document.querySelector(selector);
}
