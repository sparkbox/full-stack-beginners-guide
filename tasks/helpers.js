const moment = require('moment');

module.exports.register = function hbsHelpers(Handlebars) {
  Handlebars.registerHelper('createId', str => str.toLowerCase().replace(/\s/gi, '_'));
  Handlebars.registerHelper('now', format => moment().format(format));
  Handlebars.registerHelper('join', (arr, glue) => arr.join(glue));
};
