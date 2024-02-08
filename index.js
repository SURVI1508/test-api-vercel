const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Express on Vercel 💥💥");
});

app.get("/api/auth/signin", (req, res) => {
  res.json({ message: "Welcome to authentication!" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
