import express from "express";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/artists", async(req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async(req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT}`);
});
