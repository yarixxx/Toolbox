/**
 * It creates an instance of Template object
 * 
 * @constructor
 * @param template {String}
 * @returns {Cart.Template}
 */

Cart.Template = function(template) {
  this._tpl = template;
};

/**
 * Produces a text based on the template and provided key-value map
 * 
 * @param data {Object}
 * @returns {String}
 */
Cart.Template.prototype.render = function(data) {
  var result = this._tpl;
  for (var key in data) {
    result = result.replace(new RegExp("\{"+key+"\}", "g"), data[key]);
  }
  return result;
};
