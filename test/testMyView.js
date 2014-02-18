var MyViewTest = TestCase("MyViewTest");

MyViewTest.prototype.DAY = 1;

MyViewTest.prototype.testMyView = function() {
    this.useDom = mock(UseDOM);
    this.myView = new MyView("#test");
    this.myView.setDomProvider(this.useDom);
    this.myView.update(22);
    verify(this.useDom).putValue("#test", 22);
};
