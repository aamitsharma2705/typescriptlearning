import express = require("express");
import name from "./name";
const router: express.Router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World");
});
// add name route
name(router);

export default router;
