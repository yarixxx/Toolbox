function MyController() {
  this.view = null;
  this.template = new Template("http://api.openweathermap.org/data/2.5/weather?q={city},{country}&units={units}");
  this.urlRetriever = new UrlRetriever(this.template);
  this.timer = false;
}

MyController.prototype.run = function() {
  this.urlRetriever.run(this, { city: "Petersburg", country: "ru" , units: "metric"}, function(data) {
	this.view.publishFields(data.main);
  });
	
  if (!this.timer) {
	setInterval(this.run.bind(this), 60000);
	this.timer = true;
  }
}
