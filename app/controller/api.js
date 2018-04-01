'use strict';

const Controller = require('egg').Controller;

class APIController extends Controller {
  async checkUpdate(ctx) {
    const { version } = ctx.request.body;
    const latestVersion = await this.service.version.checkUpdate(version);

    if (latestVersion) {
      ctx.body = {
        code: 200,
        msg: 'ok',
        version: latestVersion,
      };
    } else {
      ctx.body = {
        code: 200,
        msg: 'ok',
        version: {},
      };
    }
  }
  async insertVersion(ctx) {
    const { version, downloadUrl } = ctx.request.body;
    if (!downloadUrl || !/^http(s)?:\/\/.+/.test(downloadUrl)) {
      ctx.body = {
        code: 400,
        msg: 'downloadUrl is invalid',
      };
      return;
    }

    try {
      await this.service.version.insertVersion(version, downloadUrl);
      ctx.body = {
        code: 200,
        msg: 'ok',
      };
    } catch (exception) {
      ctx.logger.error(new Error(exception));
      ctx.body = {
        code: 400,
        msg: 'error happens',
      };
    }
  }
}

module.exports = APIController;
