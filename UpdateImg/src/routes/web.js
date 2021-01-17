const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");

let routes = (app) => {
    router.get("/", function(request, response) {
        response.sendFile(path.join(__dirname + 'login.html'));
    });
    // router.get("/", homeController.getHome);

    router.post("/upload", upload.single("file"), uploadController.uploadFiles);

    return app.use("/", router);
};

module.exports = routes;
