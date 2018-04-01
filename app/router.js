'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const validVersion = app.middleware.validVersion();

  router.get('/', controller.home.index);

  router.post('/api/checkupdate', validVersion, controller.api.checkUpdate);
  router.post('/api/version', validVersion, controller.api.insertVersion);
};
