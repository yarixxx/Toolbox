function Deferred() {
  this.callbacks = [];
  this.result = false;
}

Deferred.prototype.then = function(callback) {
  this.callbacks.push(callback);
  return this;
}

Deferred.prototype.next = function(result) {
  this.result = result ? result : this.result;
  if(this.callbacks.length) {
    var callback = this.callbacks.shift();
    this.result = callback(this.result);
  }
}
