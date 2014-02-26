function BeanLoader() {
  this._fileHandler = null;
  this._loadedBeans = {};
}

BeanLoader.prototype._getBean = function(beanName, callback){
  this._fileHandler.loadFile(beanName, function() {
    var beanInstance = new Function("return new " + beanName + "();")();
    this._loadedBeans[beanName] = beanInstance;
    this.loadDependencies(beanInstance);
    if (callback) {
      callback(beanInstance);
    }
  }.bind(this));
}

BeanLoader.prototype.loadDependencies = function(beanInstance){
  var deps = beanInstance.getDependencies ? beanInstance.getDependencies() : [];
  if (deps.length) {
    deps.forEach(function(bean){
      this.loadBean(bean, function(instance) {
        beanInstance["set" + bean](instance);
      });
    }.bind(this));
  }
}

BeanLoader.prototype.setFileHandler = function(fileHandler) {
  this._fileHandler = fileHandler;
}

BeanLoader.prototype.loadBean = function(beanName, callback) {
  if (this._loadedBeans[beanName]) {
    callback(this._loadedBeans[beanName]);
  } else {
    this._getBean(beanName, callback);
  }
}
