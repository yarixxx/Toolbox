var TemplateTest = TestCase("TemplateTest");

TemplateTest.prototype.SIMPLE_TEMPLATE = "Hello, {name}!";
TemplateTest.prototype.COMPLEX_TEMPLATE = "Who is {name}? He is {title}!";
TemplateTest.prototype.DATA1 = { name: "Robert", title: "robot" };
TemplateTest.prototype.DATA2 = { name: "Terry", title: "engineer" };

TemplateTest.prototype.testSimpleTemplate = function() {
  this.template = new Template(this.SIMPLE_TEMPLATE);
  assertEquals(this.template.render(this.DATA1), "Hello, Robert!");
  assertEquals(this.template.render(this.DATA2), "Hello, Terry!");
};

TemplateTest.prototype.testComplexTemplate = function() {
  this.template = new Template(this.COMPLEX_TEMPLATE);
  assertEquals(this.template.render(this.DATA1), "Who is Robert? He is robot!");
  assertEquals(this.template.render(this.DATA2), "Who is Terry? He is engineer!");
};