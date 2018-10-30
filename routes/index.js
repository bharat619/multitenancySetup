const express = require("express");
const router = express.Router();
const RootController = require("../server/controllers/rootController");
router.get("/", RootController.index);
router.get("/addRecord", RootController.addRecord);
module.exports = router;
