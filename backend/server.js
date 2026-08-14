import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "mi_clave_secreta"; // ⚠️ cambiar en producción
const users = [
  { username: "admin", password: bcrypt.hashSync("1234", 8) }
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));
