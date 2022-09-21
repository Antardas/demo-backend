const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const connect = () => {
  mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database connected");
  }).catch((err) => {
    console.log(err);
    process.exit(1);
  });
};
module.exports = connect;
