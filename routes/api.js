const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send("API Page");
})

router.get("/custom", (req,res) => {
    res.send("Custom API Page");
})

module.exports = router;