const express = require('express')
const cors = require('cors')
const body_parser = require('body-parser')
const Value = require("./models/Value.model")
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: false
}));

(function initBDD() {
    const url = "mongodb://localhost:27018/simple_crud";
    mongoose.connection.on("open", () => {
        console.log("Connected to MongoDB");
    });
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        if(err) console.error("initBDD.connect: ", err);
    });
})();

app.get('/isAlive', (req, res) => {
    res.send("I'm alive!");
});

app.post("/values", (req, res) => {
    console.log("post values: " + req.body);
    const value = new Value({
        value: req.body.value
    });
    value.save(function(err, message) {
        if(err) return res.status(500);
        return res.status(200).json({ success: true });
    });
})

app.get("/values", (req, res) => {
    Value.find({}, function(err, values) {
        var valuesMap = {};

        values.forEach(function(value) {
            valuesMap[value._id] = value.value;
        });

        console.log(valuesMap);
        res.send(valuesMap);
    });
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});