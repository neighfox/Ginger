const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

const ConnectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log("Database connected ....");
  } catch (err) {
    console.error(err.message);

    //Processs exited with error
    process.exit(1);
  }
};

mongoose.connect(db);

module.exports = ConnectDB;
