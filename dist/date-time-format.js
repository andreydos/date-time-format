(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.DateTimeFormat = factory());
}(this, (function () { 'use strict';

function formatKeys(key) {
    return {
        YYYY: ['getFullYear', 4],
        YY: ['getFullYear', 2],
        // extra increment field for getMonth
        MM: ['getMonth', 2, 1],
        DD: ['getDate', 2],
        HH: ['getHours', 2],
        mm: ['getMinutes', 2],
        ss: ['getSeconds', 2],
        ms: ['getMilliseconds', 3]
    }[key];
}

var utils = {
    formatKeys: formatKeys
};

function Formatter(constructorFormat) {
    var globalFormat = void 0;
    var output = void 0;

    if (typeof constructorFormat !== 'string') {
        globalFormat = 'HH:mm:ss (YYYY-MM-DD)';
    } else {
        globalFormat = constructorFormat;
    }

    function parseNext(dateObject, parseToFormat) {
        var regex = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:/]*)/;
        var match = regex.exec(parseToFormat);
        var date = dateObject || new Date();

        if (match) {
            var keyProps = utils.formatKeys(match[1]);
            var paddedPatternValue = '00' + (date[keyProps[0]]() + (keyProps[2] || 0)).toString();
            var cleanPatternValue = paddedPatternValue.slice(-keyProps[1]) + (match[2] || '');
            var format = parseToFormat.replace(match[0], cleanPatternValue);

            parseNext(date, format);
        } else {
            output = parseToFormat;
        }

        return output;
    }

    this.now = function (format) {
        var outputFormat = void 0;

        if (typeof format !== 'string') {
            outputFormat = globalFormat;
        } else {
            outputFormat = format;
        }

        return parseNext(new Date(), outputFormat);
    };

    this.parse = function parse(date, format) {
        var dateObj = void 0;
        var outputFormat = void 0;

        if (!date || Number.isNaN(new Date(date).getDate())) {
            dateObj = new Date();
        } else {
            dateObj = new Date(date);
        }

        if (typeof format !== 'string') {
            outputFormat = globalFormat;
        } else {
            outputFormat = format;
        }

        return parseNext(dateObj, outputFormat);
    };

    return this;
}

return Formatter;

})));
