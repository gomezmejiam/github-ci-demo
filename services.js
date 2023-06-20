const express = require('express');
const services = express();

services.get('/suma', (req, res) => {
  const num1 = parseInt(req.query.numero1);
  const num2 = parseInt(req.query.numero2);
  const suma = num1 + num2;

  res.send(`La suma de ${num1} y ${num2} es ${suma}`);
});

services.get('/resta', (req, res) => {
  const num1 = parseInt(req.query.numero1);
  const num2 = parseInt(req.query.numero2);
  const suma = num1 - num2;

  res.send(`La resta de ${num1} y ${num2} es ${suma}`);
});

services.get('/multiplicacion', (req, res) => {
  const num1 = parseInt(req.query.numero1);
  const num2 = parseInt(req.query.numero2);
  const suma = num1 * num2;

  res.send(`La multiplicacion de ${num1} y ${num2} es ${suma}`);
});

module.exports = services;