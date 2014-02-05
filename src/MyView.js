function MyView(selector) {
  console.log("MyView" + selector);
  SimpleView.apply(this, arguments);
}

MyView.prototype = Object.create(SimpleView.prototype);

MyView.prototype.publishFields = function(data) {
  var table = document.querySelector(this.selector + " table");
  var fields = "";
  var itemTemplate = new Template("<tr><td>{key}</td><td>{value}</td></tr>");
  for (var key in data) {
    fields += itemTemplate.render({ key: key, value: data[key] });
  }
  table.innerHTML = fields;
}
