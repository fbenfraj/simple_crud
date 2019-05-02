const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const valueSchema = new Schema({
    value: {type: String}
}, {
    collection: "values"
});

const Value = mongoose.model("Input", valueSchema);

module.exports = Value;