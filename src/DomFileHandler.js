function DomFileHandler(useDom) {
  this.useDom = useDom;
}

DomFileHandler.prototype.loadFile = function(fileName, callback) {
  this.useDom.script(fileName, callback);
}
