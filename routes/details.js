const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  setTimeout(() => {

    res.json(

      {
        id: 1,
        name: "Cuenta soles",
        cardBrand: "VISA",
        currency: "PEN",
        amount: 1500.80,
        accountNumber: "898 3492915083",

        transactions: [
          {
            id: 1,
            description: "PLIN",
            date: "12 Ene 2025",
            currency: "PEN",
            amount: -6.50
          },
          {
            id: 2,
            description: "Yape",
            date: "12 Ene 2025",
            currency: "PEN",
            amount: -15.00
          },
          {
            id: 3,
            description: "Depósito en efectivo",
            date: "11 Ene 2025",
            currency: "PEN",
            amount: 500.00
          },
          {
            id: 4,
            description: "Tambo+",
            date: "11 Ene 2025",
            currency: "PEN",
            amount: -8.90
          },
          {
            id: 5,
            description: "Plaza Vea",
            date: "10 Ene 2025",
            currency: "PEN",
            amount: -124.30
          },
          {
            id: 6,
            description: "Transferencia recibida",
            date: "10 Ene 2025",
            currency: "PEN",
            amount: 250.00
          },
          {
            id: 7,
            description: "Uber",
            date: "09 Ene 2025",
            currency: "PEN",
            amount: -23.40
          },
          {
            id: 8,
            description: "Pago de servicios - Luz",
            date: "09 Ene 2025",
            currency: "PEN",
            amount: -86.70
          },
          {
            id: 9,
            description: "Retiro en cajero",
            date: "08 Ene 2025",
            currency: "PEN",
            amount: -200.00
          },
          {
            id: 10,
            description: "Restaurante",
            date: "08 Ene 2025",
            currency: "PEN",
            amount: -45.00
          },
          {
            id: 11,
            description: "Sueldo",
            date: "07 Ene 2025",
            currency: "PEN",
            amount: 3200.00
          },
          {
            id: 12,
            description: "Netflix",
            date: "07 Ene 2025",
            currency: "PEN",
            amount: -39.90
          },
          {
            id: 13,
            description: "Spotify",
            date: "06 Ene 2025",
            currency: "PEN",
            amount: -18.90
          },
          {
            id: 14,
            description: "Farmacias Inkafarma",
            date: "06 Ene 2025",
            currency: "PEN",
            amount: -32.50
          },
          {
            id: 15,
            description: "Recarga móvil Claro",
            date: "05 Ene 2025",
            currency: "PEN",
            amount: -20.00
          },
          {
            id: 16,
            description: "Transferencia enviada",
            date: "05 Ene 2025",
            currency: "PEN",
            amount: -150.00
          },
          {
            id: 17,
            description: "Pago con tarjeta",
            date: "04 Ene 2025",
            currency: "PEN",
            amount: -67.80
          },
          {
            id: 18,
            description: "Depósito",
            date: "04 Ene 2025",
            currency: "PEN",
            amount: 1000.00
          },
          {
            id: 19,
            description: "Cabify",
            date: "03 Ene 2025",
            currency: "PEN",
            amount: -19.60
          },
          {
            id: 20,
            description: "Pago de servicios - Internet",
            date: "03 Ene 2025",
            currency: "PEN",
            amount: -129.90
          }
        ]
      }


    );

  }, 2000);
});

module.exports = router;