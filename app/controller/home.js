'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.html');
  }
  async version() {
    await this.ctx.render('version.html');
  }
}

module.exports = HomeController;
