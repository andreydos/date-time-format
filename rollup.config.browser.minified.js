import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

export default {
    output: {
        format: 'umd',
        file: 'dist/date-time-format.min.js',
        sourcemap: true
    },
    name: 'DateTimeFormat',
    input: 'src/index.js',
    plugins: [
        babel({
            exclude: ['node_modules/**']
        }),
        minify({
            comments: false
        })
    ]
};