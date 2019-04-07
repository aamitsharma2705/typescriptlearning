import dotEnv = require("dotenv");
import express = require("express");

// # it automatically loads the environment variables defined in .env
dotEnv.config();

const app: express.Application = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(process.env.port, () => {
    // console.log(process.env)
    console.log("Example app listening on port --", process.env.port);
});
