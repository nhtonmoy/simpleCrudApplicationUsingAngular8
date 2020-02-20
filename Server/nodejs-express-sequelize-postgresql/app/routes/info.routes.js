module.exports = app => {
    const info = require('../controllers/info.controller.js');

    var router = require("express").Router();

    router.post("/", info.create);

    router.get("/", info.findAll);

    router.get("/:id", info.findOne);

    app.use('/info',router);
}