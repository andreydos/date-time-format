import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import formatterFriendly from 'eslint-friendly-formatter';

export default {
    output: {
        format: 'umd',
        file: 'index.js'
    },
    name: 'DateTimeFormat',
    input: 'src/index.js',
    plugins: [
        eslint({
            exclude: ['node_modules/**'],
            include: 'src/**/*.js',
            throwOnError: true,
            formatter: formatterFriendly
        }),
        babel({
            exclude: ['node_modules/**']
        })
    ]
};