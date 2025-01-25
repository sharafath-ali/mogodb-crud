import express from "express";
import { connectDb, getDb } from "./db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let db;
connectDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("Example app listening on port 3000!");
    });
    db = getDb();
  }
  else {
    console.log(err);
  }
});
