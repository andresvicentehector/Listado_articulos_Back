const express = require("express");
const router = express.Router();

const { create } = require("../controllers/create_article");

router.post("/create", create);

module.exports =  router ;