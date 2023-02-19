const express = require("express");
const path = require("path");
const cors = require("cors");
const connectBD = require("./db/db");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());

connectBD();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", require("./router/auth"));
app.use("/api/color", require("./router/color"));

app.use(express.static("frontend/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () =>
  console.log(`> SERVER IS LISTENING http://localhost:${port}`)
);
