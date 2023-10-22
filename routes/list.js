const express = require("express");
const router = express.Router();

const { listar } = require("../controllers/list");

router.get("/listar/:limitar", listar);

module.exports = router;
