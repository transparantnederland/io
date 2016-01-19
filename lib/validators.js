var schemas = require('tnl-schemas');
var validator = require('is-my-json-valid');

module.exports = {
  dataset: validator(schemas.dataset),
  pits: validator(schemas.pits),
  relations: validator(schemas.relations)
};
