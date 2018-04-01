'use strict';

module.exports = () => {
  const config = exports = {};

  config.pwd = '1234qwer';

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/almosthere',
    },
  };

  return config;
};
