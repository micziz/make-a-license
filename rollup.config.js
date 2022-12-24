import json from '@rollup/plugin-json';


export default {
  input: 'build/index.js',
  output: {
    file: 'bundle.js',
    format: 'esm'
  },
  plugins: [json()]
};