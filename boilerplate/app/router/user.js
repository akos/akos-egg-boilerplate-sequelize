'use strict';

module.exports = app => {
    app.router.get('/user/index', app.controller.user.index);
    app.router.get('/user/show', app.controller.user.show);
};