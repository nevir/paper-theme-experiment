/**
 * A shim for `document.createElement` that fires a `HTMLElementRegistered`
 * event upon registration of a custom element.
 *
 * TODO(imac): It's a bit surprising that this doesn't seem to already be part
 *             of the spec. Perhaps there's a reason for that?
 */
(function(scope) {
'use strict';

var originalRegisterElement = document.registerElement;

function registerElementWithEvent(name, options) {
  var result = originalRegisterElement.apply(this, arguments);

  // TODO(imac): Is there sufficient browser/polyfill support to do this?
  var event = new Event('HTMLElementRegistered');
  event.elementName = name;
  if (result) {
    event.elementConstructor = result;
    event.elementPrototype = result.prototype;
  }
  document.dispatchEvent(event);

  return result;
}

document.register = document.registerElement = registerElementWithEvent;

})(window);
