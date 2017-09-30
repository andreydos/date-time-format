// function Formatter() {
//     this.test = (i) => {
//         console.log('TEST');
//         return i + 1;
//     };
// }
//
// export { Formatter as default };

module.exports = function(number, locale) {
    return number.toLocaleString(locale);
};