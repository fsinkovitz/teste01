const app = require('./src/config/custom-express');

app.listen(3000, () => 
console.log("Servidor ouvindo na porta 3000")
);

app.get('/', (req, res) =>
res.send("'Maratona Full Cycle 2.0'")
);
