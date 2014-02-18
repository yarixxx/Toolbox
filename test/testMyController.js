var MyControllerTest = TestCase("MyControllerTest");

MyControllerTest.prototype.DAY = 3;

MyControllerTest.prototype.testMyController = function() {
  this.givenModel();
  this.givenDate();
  this.givenMyControllerCreated();
  this.myController.setDateProvider(this.date);
  this.myController.dayUpdate();
  this.thenNewDayShouldBeCalledOnTheModel();
};

MyControllerTest.prototype.givenModel = function() {
    this.myModel = mock(MyModel);
}

MyControllerTest.prototype.givenDate = function() {
    this.date = mock(Date);
    when(this.date).getDay().thenReturn(this.DAY);
}

MyControllerTest.prototype.givenMyControllerCreated = function () {
    this.myController = new MyController(this.myModel);
};

MyControllerTest.prototype.thenNewDayShouldBeCalledOnTheModel = function() {
  verify(this.date).getDay();
  verify(this.myModel).newDay(this.DAY);
};
