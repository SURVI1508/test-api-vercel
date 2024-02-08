const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Express on Vercel 💥💥");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
