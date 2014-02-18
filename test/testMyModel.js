var MyModelTest = TestCase("MyModelTest");

MyModelTest.prototype.DAY = 1;

MyModelTest.prototype.testMyModel = function() {
  this.myView = mock(MyView);
  this.template = mock(Template);
  this.myModel = new MyModel(this.myView);
  this.myModel.newDay(this.DAY);
  verify(this.myView).update(hasMember('day', this.DAY));
};
