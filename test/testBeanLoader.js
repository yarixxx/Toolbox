var BeanLoaderTest = TestCase("BeanLoaderTest");

BeanLoaderTest.prototype.setUp = function() {
  this.fileHandler = mock(DomFileHandler);
  this.beanLoader = new BeanLoader();
  this.beanLoader.setFileHandler(this.fileHandler);
};

BeanLoaderTest.prototype.testLoadBeanMyView = function() {
  this.givenLoadFileMethod();
  this.beanLoader.loadBean("MyView", this.myViewLoadedCallback);
};

BeanLoaderTest.prototype.givenLoadFileMethod = function() {
  var that = this;
  var beanLoader = this.beanLoader;
  when(this.fileHandler).loadFile("MyView", anything()).then(function() {
    beanLoader._loadFileCallback("MyView", that.myViewLoadedCallback);
  });
}

BeanLoaderTest.prototype.myViewLoadedCallback = function(bean) {
  assertTrue("MyView bean loaded", bean instanceof MyView);
};
