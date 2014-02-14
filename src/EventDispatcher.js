/**
 * Creates a new instance of EventDispatcher
 * 
 * @constructor
 * @returns {EventDispatcher}
 */
EventDispatcher = function() {
  this.events = {};
};

/**
 * Adds callback to the specified event
 * 
 * @param event {String}
 * @param callback {Function}
 */
EventDispatcher.prototype.addEventListener = function(event, callback) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  this.events[event].push(callback);
};

/**
 * Triggers event with the provided parameters
 * 
 * @param event {String}
 * @param parameters
 */
EventDispatcher.prototype.triggerEvent = function(event, parameters) {
  var handlers = this.getEventHandlers(event);
  if (handlers) {
    for (var key in handlers) {
      var callback = handlers[key];
      callback(parameters);
    };
  };
};

/**
 * Removes callback from the selected event
 * 
 * @param event {String}
 * @param callback {Function}
 */
EventDispatcher.prototype.removeEventListener = function(event, callback) {
  for (var i = 0; i < this.events[event].length; i++) {
    if (this.events[event][i] === callback) {
      this.events[event].splice(i,1);
    }
  }
};

EventDispatcher.prototype.getEventHandlers = function(event) {
  return this.events[event];
};
