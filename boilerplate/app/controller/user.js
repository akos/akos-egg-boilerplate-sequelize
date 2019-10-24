'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const users = await this.ctx.model.User.findAll();
        this.ctx.setBodyContent(200, users);
    }

    async show() {
        const user = await this.ctx.model.User.findByLogin(this.ctx.params.login);
        await user.logSignin();
        this.ctx.body = user;
    }
}

module.exports = UserController;