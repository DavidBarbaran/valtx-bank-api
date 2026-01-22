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

  if (user.usr_code === "usr_XYZ") {
    return res.json({
      data: {
        accessToken: "fakeAccessToken123",
        expiresIn: new Date(Date.now() + 2 * 60 * 1000).toISOString(),
        tokenType: "Bearer",
        user: {
          id: "597a76de9ad7celfbce07095",
          rbac: { role: "Guest", template: "default" },
          profile: { language: user.profile.language }
        }
      }
    });
  }

  // Usuario/contraseña incorrectos
  return res.status(401).json({
    error: {
      code: 401,
      userMessage: {
        es: "Usuario y/o contraseña incorrectos"
      }
    }
  });
});

module.exports = router;