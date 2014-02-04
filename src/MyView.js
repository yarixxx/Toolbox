function MyView(selector) {
	console.log("MyView" + selector);
	SimpleView.apply(this, arguments);
}
MyView.prototype = Object.create(SimpleView.prototype);
