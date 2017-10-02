function formatKeys(key) {
    return ({
        YYYY: ['getFullYear', 4],
        YY: ['getFullYear', 2],
        // extra increment field for getMonth
        MM: ['getMonth', 2, 1],
        DD: ['getDate', 2],
        HH: ['getHours', 2],
        mm: ['getMinutes', 2],
        ss: ['getSeconds', 2],
        ms: ['getMilliseconds', 3],
    })[key];
}

const utils = {
    formatKeys,
};

export default utils;
