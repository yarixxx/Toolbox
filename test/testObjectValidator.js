var ObjectValidatorTest = TestCase("ObjectValidatorTest");

ObjectValidatorTest.prototype.OBJECT_MODEL = {
    name: 'string',
    age: 'number',
    hello: 'function'
};

ObjectValidatorTest.prototype.VALID_OBJECT = {
    name: 'Robot',
    age: 1000,
    hello: function () {}
};

ObjectValidatorTest.prototype.INVALID_OBJECT = {
    name: 'Robot',
    age: 1000
};

ObjectValidatorTest.prototype.setUp = function() {
  this.objectValidator = new ObjectValidator();
  this.objectValidator.setModel(this.OBJECT_MODEL);
};

ObjectValidatorTest.prototype.testValidateValidObjectShouldPass = function() {
  assertTrue(this.objectValidator.ensureImplements(this.VALID_OBJECT));
};

ObjectValidatorTest.prototype.testValidateInvalidObjectShouldFail = function() {
  assertFalse(this.objectValidator.ensureImplements(this.INVALID_OBJECT));
};
