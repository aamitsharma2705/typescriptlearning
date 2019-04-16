import express = require("express");
function greetNamed(name: string): string {
    return `Hi! ${name}`;
}

export default (router: express.Router) => {
    router.get("/:name", (req, res) => {
        res.send(greetNamed(req.params.name));
    });
};
