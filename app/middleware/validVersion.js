'use strict';

const VersionUtil = require('../utils/version');
module.exports = () => {
  return async function valid(ctx, next) {
    console.log(ctx.request.body);
    const { version } = ctx.request.body;
    if (!VersionUtil.isValid(version)) {
      ctx.body = {
        code: 400,
        msg: 'version is invalid',
      };
      return;
    }
    await next();
  };
};
