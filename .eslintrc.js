module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    extends: [
        'airbnb-base'
    ],
    rules: {
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        "no-console": 0
    }
};