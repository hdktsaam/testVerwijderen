const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/testdb"); //{useNewUrlParser: true, useUni}
mongoose.connect(
  "mongodb+srv://TsaamAdmin:Tsaam2023@cluster0.mpjrd.mongodb.net/testdb"
);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("connecten to db ok");
});
