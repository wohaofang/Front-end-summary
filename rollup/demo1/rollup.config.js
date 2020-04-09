const path = require('path');
const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');
const resolve = function(filePath) {
  return path.join(__dirname, '.', filePath)
}
const babelOptions = {
    "presets": [
      ["env", {
        "modules": false
      }],
    ],
    "plugins": [
      "transform-object-rest-spread",
    ],
  }
export default {
  input: resolve('src/index.js'),
  output: {
    file: resolve('bundle.js'),
    format: 'cjs'
  },
  plugins: [
    babel({
        "presets": [
          ["env", {
            "modules": false
          }],
        ],
        "plugins": [
          "transform-object-rest-spread"
        ],
      }),
    uglify()
  ],
};