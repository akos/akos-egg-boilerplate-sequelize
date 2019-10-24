'use strict';

exports.keys = 'admin-cloud-egg';

exports.bodyParser = {
    enable: false,
};
exports.security = {
    csrf: {
        type: 'ctoken',             // can be ctoken or referer or all, default to ctoken
        useSession: false,          // if useSession set to true, the secret will keep in session instead of cookie
        ignoreJSON: false,          // skip check JSON requests if ignoreJSON set to true
        headerName: 'x-csrf-token', // request csrf token's name in header
    },
};
// 引入自定义中间件，包含报文解析，链路索引，日志优化
exports.middleware = [
    'bodyParsePatch',
    'errorHandle',
];
exports.view = {
    defaultViewEngine: 'nunjucks',
};
exports.nunjucks = {
    // dir: 'path/to/template/dir',  // default to `{app_root}/app/view`
    cache: true, // local env is false
};
// 引入egg-sequelize插件
// 填充自己数据库
exports.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'test',
    host: '127.0.0.1',
    port: 3306,
    username: 'xxx',
    password: 'xxxx',
};

exports.router = {
    path: './router'
}

