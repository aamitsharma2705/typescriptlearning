import express = require("express");

const app: express.Application = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(process.env.port, () => {
    // console.log(process.env)
    console.log("Example app listening on port --", process.env.port);
});
