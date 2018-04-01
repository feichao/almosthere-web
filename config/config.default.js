'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_a_l_m_o_s_t_here';

  // add your config here
  config.middleware = [];

  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/view'),
  };

  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.html': 'ejs',
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:32771/almosthere',
      options: {
        user: 'admin',
        password: '0YhkEISqojoR',
      },
    },
  };

  return config;
};
