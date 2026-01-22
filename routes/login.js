const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { user } = req.body;

    /*return res.status(400).json({
      error: {
        userMessage: {
          es: "Sucedió un error inesperado",
      }
    }
    });-*/

  if (user.usr_code == "75664393") {
    return res.json({
      data: {
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRhdmlkIERlIGxhIFZlZ2EgQmFyYmFyYW4iLCJyb2xlIjoiVVNFUiIsImV4cCI6MTczNzA1OTIwMH0.kQp8T6k7N0sFZ8Zx1r8pXnQpLkZyR1M2CwQJ9YF2aKs",
        expiresIn: new Date(Date.now() + 2 * 60 * 1000).toISOString(),
        tokenType: "Bearer",
        user: {
          id: "597a76de9ad7celfbce07095",
          rbac: { role: "Guest", template: "default" },
          profile: { language: user.profile.language }
        }
      }
    });
  } else {
    return res.status(401).json({
        error: {
          code: 401,
          userMessage: {
            es: "Usuario y/o contraseña incorrectos",
            ja: "アプリケーションのバージョンがプラットフォームに存在しない"
          }
        }
      });
  }

  // Usuario/contraseña incorrectos
  
});

module.exports = router;