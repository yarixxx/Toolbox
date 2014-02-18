/**
 *
 * @param view
 * @constructor
 */
function MyModel(view) {
  this.view = view;
  this.day = null;
};

MyModel.prototype.newDay = function(day){
  this.day = day;
  this.view.update({ day: day });
};
