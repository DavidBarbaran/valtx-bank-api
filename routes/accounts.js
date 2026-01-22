const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  setTimeout(() => {
    res.json([
      {
        id: 1,
        name: "Cuenta soles",
        cardBrand: "VISA",
        currency: "PEN",
        amount: 1500.80,
      },
      {
        id: 2,
        name: "Cuenta soles",
        cardBrand: "MASTERCARD",
        currency: "PEN",
        amount: 2000.50,
      },
      {
        id: 3,
        name: "Cuenta dolares",
        cardBrand: "VISA",
        currency: "USD",
        amount: 1800.10,
      },
      {
        id: 4,
        name: "Cuenta dolares",
        cardBrand: "VISA",
        currency: "USD",
        amount: 0.00,
      }
    ]);
  }, 2000);
});


module.exports = router;