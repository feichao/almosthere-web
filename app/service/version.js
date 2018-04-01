'use strict';

const Service = require('egg').Service;
const VersionUtil = require('../utils/version');

class VersionService extends Service {
  async checkUpdate(version) {
    const versions = await this.app.model.Version.find();
    console.log(versions);
    if (versions && !versions.length) {
      return null;
    }

    const latestVersion = versions.filter(
      vModel => VersionUtil.isLater(vModel.version, version)
    ).sort(VersionUtil.sort)[0];

    if (latestVersion) {
      return {
        version: latestVersion.version,
        downloadUrl: latestVersion.downloadUrl,
      };
    }
    return null;
  }
  async insertVersion(version, downloadUrl) {
    const vModel = new this.app.model.Version({
      version, downloadUrl,
      createDate: new Date(),
    });

    try {
      await vModel.save();
    } catch (exception) {
      throw exception;
    }
  }
}

module.exports = VersionService;
