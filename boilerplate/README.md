# {{name}}

{{description}}

## QuickStart

<!-- add docs here for user -->

see [akos docs][akos][egg docs][egg] for more detail.
### Preparation
1. Create the database base on 「/sql/user.sql」;
2. Completion 「/app/config/config.default.js」-> exports. Sequelize information.

```js
exports.sequelize = {
dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'test',
        host: '127.0.0.1',
        port: 3306,
        username: 'xxx',
        password: 'xxxx',
    };
```

### Development
```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.