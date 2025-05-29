const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy user database
const users = [
  { email: "kasir@gobeng.com", password: "kasir123", role: "kasir" },
  { email: "admin@gobeng.com", password: "admin123", role: "admin" },
  { email: "user@gobeng.com", password: "user123", role: "user" },
];

// Login route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) return res.status(401).json({ message: "Login gagal" });

  res.json({ message: "Login sukses", user });
});

// Run server
app.listen(PORT, () => {
  console.log(`GoBeng API running on http://localhost:${PORT}`);
});
