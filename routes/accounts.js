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
        amount: 1000.80,
        accountNumber: "898 3492915083"
      },
      {
        id: 2,
        name: "Cuenta soles",
        cardBrand: "MASTERCARD",
        currency: "PEN",
        amount: 2000.50,
        accountNumber: "898 3492915083"
      },
      {
        id: 3,
        name: "Cuenta dolares",
        cardBrand: "VISA",
        currency: "USD",
        amount: 1800.10,
        accountNumber: "545 4012915467"
      },
      {
        id: 4,
        name: "Cuenta dolares",
        cardBrand: "VISA",
        currency: "USD",
        amount: 0.00,
        accountNumber: "545 4012915467"
      }
    ]);
  }, 3000);
});


module.exports = router;