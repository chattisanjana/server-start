
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const Knex = require("knex");
const knexConfig = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test',
        charset: 'utf8'
    },
    migrations: {
        directory: __dirname + '/knex/migrations',
    },
    seeds: {
        directory: __dirname + '/knex/seeds'
    }
}
const knex = Knex(knexConfig);
const { Model } = require("objection");
const first = require("./model/first");
Model.knex(knex);
global.knex = knex;
const app = express();
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
const port = 3000;
var router = express.Router();
// console.log(process.env);
router.get("/", async function (req, res, next) {
    const a=await first.query()
    console.log(a,'a');
    console.log("Server Is Up and Running");
    // res.end();
    res.send("Server Is Up and Running");
});

app.use(router);
// error handling
app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .send({ message: err.message, stack: err.stack });
});
app.listen(port, () => {
    console.log(`SERVER started at ${port}`);
});
