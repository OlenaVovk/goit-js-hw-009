!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");function a(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector("form").addEventListener("submit",(function(n){n.preventDefault();for(var t=n.currentTarget.elements,o=t.delay,r=t.step,u=t.amount,l=parseInt(o.value),c=1;c<=parseInt(u.value);c++){1===c?l=parseInt(o.value):l+=parseInt(r.value),a(c,l).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))}))}n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.3fe3972c.js.map
