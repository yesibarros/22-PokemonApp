const express = require("express");
const router = express.Router();
const AtaquesController = require("../controllers/ataques");

router.get("/", AtaquesController.findAll);

module.exports = router;
