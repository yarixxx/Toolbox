function UseDOM() {
}

UseDOM.prototype.readValue = function(selector) {
  return document.querySelector(selector).innerText;
}

UseDOM.prototype.putValue = function(selector, value) {
  document.querySelector(selector).innerText = value;
}
