import utils from './utils';

function Formatter(constructorFormat) {
    let globalFormat;
    let output;

    if (typeof constructorFormat !== 'string') {
        globalFormat = 'HH:mm:ss (YYYY-MM-DD)';
    } else {
        globalFormat = constructorFormat;
    }

    function parseNext(dateObject, parseToFormat) {
        const regex = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:/]*)/;
        const match = regex.exec(parseToFormat);
        const date = dateObject || new Date();

        if (match) {
            const keyProps = utils.formatKeys(match[1]);
            const paddedPatternValue = `00${(date[keyProps[0]]() + (keyProps[2] || 0)).toString()}`;
            const cleanPatternValue = paddedPatternValue.slice(-keyProps[1]) + (match[2] || '');
            const format = parseToFormat.replace(match[0], cleanPatternValue);

            parseNext(date, format);
        } else {
            output = parseToFormat;
        }

        return output;
    }

    this.now = (format) => {
        let outputFormat;

        if (typeof format !== 'string') {
            outputFormat = globalFormat;
        } else {
            outputFormat = format;
        }

        return parseNext(new Date(), outputFormat);
    };

    this.parse = function parse(date, format) {
        let dateObj;
        let outputFormat;

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

export { Formatter as default };
