'use strict';

// had enabled by egg
// exports.static = true;
exports.logview = {
  package: 'egg-logview',
  env: [ 'default' ],
};

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
