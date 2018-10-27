const colors = require('colors');
const shell = require('shelljs');

function stylelint() {
  shell.echo(colors.bgGreen('\n - Running stylelint - \n').black);
  shell.exec('stylelint src/scss/*.scss');
};

stylelint();
