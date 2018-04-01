'use strict';

/**
 * Get Version model
 *  version: xxx.xxx.xxx
 * @param {*} app egg app
 * @return {*} mongoose model
 */
const VERSION_MODEL = require('../constants').VERSION_MODEL;
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const VersionSchema = new Schema({
    version: { type: String, required: true },
    downloadUrl: { type: String, required: true },
    createDate: { type: Date, default: Date.now },
  });

  if (!app[VERSION_MODEL]) {
    app[VERSION_MODEL] = mongoose.model('Version', VersionSchema);
  }

  return app[VERSION_MODEL];
};
