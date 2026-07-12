// importing necessary modules
const router = require("express").Router();
const fs = require("fs");
const path = require("path");

// Lokasi miss.txt
const MISS_FILE = path.join(__dirname, "miss.txt");

// Home
router.get("/", (req, res) => {
    res.send("Simple reverse proxy by GrowPlus Community");
});

// Akses miss.txt
router.get("/miss.txt", (req, res) => {
    fs.readFile(MISS_FILE, "utf8", (err, data) => {
        if (err) {
            return res.status(404).send("miss.txt not found");
        }

        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.send(data);
    });
});

// exporting the router
module.exports = router;
