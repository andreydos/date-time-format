(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.DateTimeFormat = factory());
}(this, (function () { 'use strict';

function Formatter() {
    this.test = function () {
        console.log('TEST');
    };
}

return Formatter;

})));
