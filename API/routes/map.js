
var express = require('express');
var router = express.Router();
var http = require("http");



router.get("/", (req, res) => {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + req.query.q + "&units=metric&appid=3e0d6900003924f67b5e7d1fe93c2f37";
    console.log(url);
    http.get(url,
        function (result) {
            console.log("ok");

            let rawData='';

            result.on('data', (chunk) => { rawData += chunk; });
            result.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    console.log(parsedData);
                    res.render('map', { marker : parsedData })
                } catch (e) {
                    console.error(e.message);
                }
            });

        });

})

module.exports = router;
