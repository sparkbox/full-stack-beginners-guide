const moment = require('moment');
const markdown = require('helper-markdown');
const layouts = require('handlebars-layouts');

module.exports.register = function hbsHelpers(Handlebars) {
  Handlebars.registerHelper('createId', str => str.toLowerCase().replace(/\s/gi, '_'));
  Handlebars.registerHelper('now', format => moment().format(format));
  Handlebars.registerHelper('join', (arr, glue) => arr.join(glue));
  Handlebars.registerHelper(layouts(Handlebars));
  Handlebars.registerHelper('markdown', require('helper-markdown'));
};
