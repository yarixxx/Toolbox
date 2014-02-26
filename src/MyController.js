function MyController() {
  this.model = null;
  this.dateProvider = null;
}

MyController.prototype.setDateProvider = function(dateProvider) {
  this.dateProvider = dateProvider;
}

MyController.prototype.dayUpdate = function() {
  this.model.newDay(this.dateProvider.getDay());
}

MyController.prototype.run = function(interval) {
  this.timer = setInterval(this.dayUpdate, interval);
}

MyController.prototype.stop = function(interval) {
  clearInterval(this.timer);
}

MyController.prototype.setMyModel = function(model) {
  this.model = model;
}

MyController.prototype.getDependencies = function() {
  return ["MyModel"];
}
