"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./src/database/db.sqlite",
    migrations: [
        "./src/database/migrations/*.ts"
    ],
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!!');
})
    .catch((err) => {
    console.log('Error during Data Source initialization', err);
});
