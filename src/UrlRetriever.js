function UrlRetriever(urlTemplate) {
  var _urlTemplate = urlTemplate;
  var http = new window.XMLHttpRequest();
  
  this.run = function(context, parameters, callback) {
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        callback.call(context,  JSON.parse(http.responseText));
      }
    }
    http.open("GET", _urlTemplate.render(parameters), true);
    http.send(null);
  }
}
