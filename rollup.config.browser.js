import babel from 'rollup-plugin-babel';

export default {
    output: {
        format: 'umd',
        file: 'dist/date-time-format.js'
    },
    name: 'DateTimeFormat',
    input: 'src/index.js',
    plugins: [
        babel({
            exclude: ['node_modules/**']
        })
    ]
};