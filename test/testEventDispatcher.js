var EventDispatcherTest = TestCase("EventDispatcherTest");

EventDispatcherTest.prototype.FIRST_EVENT = "firstEvent";
EventDispatcherTest.prototype.SECOND_EVENT = "secondEvent";

EventDispatcherTest.prototype.setUp = function() {
  EventDispatcherTest.firstFlag = false;
  EventDispatcherTest.secondFlag = false;
  EventDispatcherTest.counter = 0;
  this.dispatcher = new EventDispatcher();
};

EventDispatcherTest.prototype.testCatchFirstEventAfterItHappen = function() {
  this._givenFirstEventListener();
  this._whenFirstEventHappen();
  this._thenFirstEventHandlerShouldHappen();
};

EventDispatcherTest.prototype.testCatchFirstEventTwiceAfterItHappen = function() {
  this._givenFirstEventListener();
  this._givenSecondEventListener();
  this._whenFirstEventHappen();
  this._thenFirstEventHandlerShouldHappen();
  this._thenSecondEventHandlerShouldHappen();
};

EventDispatcherTest.prototype.testFirstEventShouldBeSkippedIfListenerRemoved = function() {
  this._givenFirstEventListenerCounter();
  this._whenFirstEventHappen();
  this._thenCounterShouldBeEqualToOne();
  this._whenEventListenerRemoved();
  this._whenFirstEventHappen();
  this._thenCounterShouldBeEqualToOne();
};

EventDispatcherTest.prototype._givenFirstEventListener = function() {
  this.dispatcher.addEventListener(EventDispatcherTest.FIRST_EVENT, this._firstFlagChange);
};

EventDispatcherTest.prototype._givenSecondEventListener = function() {
  this.dispatcher.addEventListener(EventDispatcherTest.FIRST_EVENT, this._secondFlagChange);
};

EventDispatcherTest.prototype._givenFirstEventListenerCounter = function() {
  this.dispatcher.addEventListener(EventDispatcherTest.FIRST_EVENT, this._eventCounter);
};

EventDispatcherTest.prototype._whenFirstEventHappen = function() {
  this.dispatcher.triggerEvent(EventDispatcherTest.FIRST_EVENT);
};

EventDispatcherTest.prototype._whenEventListenerRemoved = function() {
  this.dispatcher.removeEventListener(EventDispatcherTest.FIRST_EVENT, this._eventCounter);
};

EventDispatcherTest.prototype._firstFlagChange = function() {
  EventDispatcherTest.firstFlag = true;
};

EventDispatcherTest.prototype._secondFlagChange = function() {
  EventDispatcherTest.secondFlag = true;
};

EventDispatcherTest.prototype._eventCounter = function() {
  EventDispatcherTest.counter++;
};

EventDispatcherTest.prototype._thenFirstEventHandlerShouldHappen = function() {
  assertTrue(EventDispatcherTest.firstFlag);
};

EventDispatcherTest.prototype._thenSecondEventHandlerShouldHappen = function() {
  assertTrue(EventDispatcherTest.secondFlag);
};

EventDispatcherTest.prototype._thenCounterShouldBeEqualToOne = function() {
  assertEquals(EventDispatcherTest.counter, 1);
};