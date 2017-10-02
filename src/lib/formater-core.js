import utils from './utils';

function Formatter(constructorFormat) {
    let globalFormat;
    let output;

    if (typeof constructorFormat !== 'string') {
        globalFormat = 'HH:mm:ss (YYYY-MM-DD)';
    } else {
        globalFormat = constructorFormat;
    }

    function parseNext(parseToFormat, dateObject) {
        const regex = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:/]*)/;
        const match = regex.exec(parseToFormat);
        const date = dateObject || new Date();

        if (match) {
            const keyProps = utils.formatKeys(match[1]);
            const paddedPatternValue = `00${(date[keyProps[0]]() + (keyProps[2] || 0)).toString()}`;
            const cleanPatternValue = paddedPatternValue.slice(-keyProps[1]) + (match[2] || '');
            const format = parseToFormat.replace(match[0], cleanPatternValue);

            parseNext(format, date);
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

        return parseNext(outputFormat);
    };

    this.parse = function parse(format, date) {
        if (constructorFormat) {
            console.log('Since format specified globally in the constructor use "parseWithFormat" function instead');

            return undefined;
        }

        let dateObj;
        let outputFormat;

        if (typeof format !== 'string') {
            outputFormat = globalFormat;
        } else {
            outputFormat = format;
        }

        if (!date || Number.isNaN(new Date(date).getDate())) {
            dateObj = new Date();
        } else {
            dateObj = new Date(date);
        }

        return parseNext(outputFormat, dateObj);
    };

    this.parseWithFormat = () => {
        console.log('Not realized yet.');
    };

    return this;
}

export { Formatter as default };
