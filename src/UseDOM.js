function UseDOM() {
}

UseDOM.prototype.readValue = function(selector) {
  return document.querySelector(selector).innerText
}

UseDOM.prototype.putValue = function(selector, value) {
  document.querySelector(selector).innerText = value;
}

UseDOM.prototype.script = function(name, callback) {
  var script = document.createElement("script");
  document.querySelector("head").appendChild(script);
  script.onload = script.onreadystatechange = function() {
    script.onload = script.onreadystatechange = null;
    callback();
  };
  script.setAttribute("async", true);
  script.setAttribute("src", "src/" + name + ".js");
}
