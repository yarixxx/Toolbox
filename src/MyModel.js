/**
 *
 * @constructor
 */
function MyModel() {
  this.view = null;
  this.controller = null;
  this.day = null;
};

MyModel.prototype.newDay = function(day){
  this.day = day;
  this.view.update({ day: day });
};

MyModel.prototype.setMyController = function(controller) {
  this.controller = controller;
}

MyModel.prototype.setMyView = function(view) {
  this.view = view;
}

MyModel.prototype.getDependencies = function() {
    return ["MyController", "MyView"];
}
