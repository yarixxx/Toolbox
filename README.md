# Simple Toolbox for usable parts of code in JavaScript

## EventDispatcher
It helps to organize interaction between different parts of the system without strict binding.
* `addEventListener` - to listen if some interesting event will happen
* `triggerEvent` - to tell every one that something occures
* `removeEventListener` - to stop listening

## Deferred
Simple implementation of Deferred helps to work with continues callback performing.
* `then` - add callback
* `next` - call the oldest callback

## Template
Template could be created with the following code:

`var tpl = new Template("<{tagName} {property}='{propertyValue}'/>");`

to render new string using this template

`var string = tpl.render({tagName:"a", property: "href", propertyValue:"http//github.com/"});`

## UrlRetriever
To retrieve result from any URL create UrlRetriever object:

`var ur = UrlRetriever("http://github.com/{userName}");`

then provide context, parameters and callback:

`ur.run(this, {userName:"yarixxx"}, function(result) { console.log(result); });`
