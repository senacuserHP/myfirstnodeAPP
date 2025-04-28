const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Lista de usuários');
});

router.post('/', (req, res) => {
  res.send('Criar um novo usuário');
});

module.exports = router;
