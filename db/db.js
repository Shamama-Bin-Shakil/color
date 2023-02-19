const mongoose = require("mongoose");

const connectBD = () => {
    const URL = process.env.URL_DB;
    mongoose.connect(URL, () => {
        console.log("CONNECTION SUCCESSFULLY");
    })
}
module.exports = connectBD;