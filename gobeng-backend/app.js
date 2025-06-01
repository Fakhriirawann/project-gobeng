const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy user database
const users = [
  {
    email: "kasir@gobeng.com",
    password: "kasir123",
    role: "kasir",
    name: "Kasir GoBeng",
  },
  {
    email: "admin@gobeng.com",
    password: "admin123",
    role: "admin",
    name: "Admin GoBeng",
  },
  {
    email: "user@gobeng.com",
    password: "user123",
    role: "user",
    name: "User GoBeng",
  },
  {
    email: "mitra@gobeng.com",
    password: "mitra123",
    role: "mitra",
    name: "Mitra GoBeng",
  },
];

// Simulasi penyimpanan user login (untuk demo saja)
let currentUser = null;

// Login route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Login gagal" });
  }

  currentUser = user;
  const token = "dummy-token"; // Bisa kamu ganti dengan JWT nanti

  res.json({ message: "Login sukses", user, token });
});

// Get current user
app.get("/api/auth/me", (req, res) => {
  if (!currentUser) {
    return res.status(401).json({ message: "Belum login" });
  }

  res.json(currentUser);
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`GoBeng API running on http://localhost:${PORT}`);
});
