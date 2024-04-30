const express = require("express");
const app = express();
const PORT = 3000;
dotenv.config();
app.listen(PORT, () => {
  console.log(`server running in ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Home page");
});
