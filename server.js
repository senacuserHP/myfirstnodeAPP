// Importa o Express
const express = require('express');
const app = express();

// Define uma porta para o servidor escutar
const PORT = process.env.PORT || 3000;

// Rota básica
app.get('/', (req, res) => {
  res.send('Servidor Express funcionando!');
});

// Faz o servidor "escutar" a porta
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);
