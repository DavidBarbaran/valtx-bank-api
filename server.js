const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Rutas
app.use("/auth/users/login/anonymous", require("./routes/login"));
app.use("/accounts", require("./routes/accounts"));
app.use("/details", require("./routes/details"));

// En caso de error por falta de alguna información 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Sucedio un error inesperado" });
});

app.listen(PORT, () => {
  console.log(`Mock API corriendo en http://localhost:${PORT}`);
});
