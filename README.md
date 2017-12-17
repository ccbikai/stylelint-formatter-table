# stylelint-formatter-table

A table formatter for [Stylelint](https://stylelint.io/)

![image](https://cloud.githubusercontent.com/assets/2959393/24393553/275001e2-13cb-11e7-83b4-5d555c6392f2.png)

## Install
Using [yarn](https://yarnpkg.com/):

```
$ yarn add stylelint-formatter-table --dev
```


Using npm:

```
$ npm i stylelint-formatter-table -D
```

## Usage

### Stylelint CLI

```
$ stylelint file.css --custom-formatter=node_modules/stylelint-formatter-table
```

### [Webpack](https://github.com/JaKXz/stylelint-webpack-plugin)

```js
const styleLintPlugin = require('stylelint-webpack-plugin');
const stylelintFormatter = require('stylelint-formatter-table');

module.exports = {
  // ...
  plugins: [
    new styleLintPlugin({
      formatter: stylelintFormatter
    }),
  ],
  // ...
}
```

### [gulp-stylelint](https://github.com/olegskl/gulp-stylelint)

```js
const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const stylelintFormatter = require('stylelint-formatter-table');

gulp.task('lint', () =>
  gulp.src('file.css')
    .pipe(stylelint({
      reporters: [ {
        formatter: stylelintFormatter,
        console: true
      } ]
    }));
);
```

### [grunt-stylelint](https://github.com/wikimedia/grunt-stylelint)

```js
const stylelintFormatter = require('stylelint-formatter-table');

grunt.initConfig({
  stylelint: {
    options: {
      formatter: stylelintFormatter
    },
    all: ['css/**/*.css']
  }
});

grunt.loadNpmTasks('grunt-stylelint');
grunt.registerTask('default', ['stylelint']);
```
