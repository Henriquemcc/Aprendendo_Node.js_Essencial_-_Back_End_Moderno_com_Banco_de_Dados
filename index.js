const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(new Date().toString(), req.host, req.method, req.url);
    next();
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/henrique", function(req, res) {
    res.send("Henrique Mendonça Castelar Campos");
});

app.get("/ola", function(req, res) {
    let nome = req.query.nome;
    res.send(`Olá ${nome}`);
});

// Inicializa o servidor HTTP na porta 3000
app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
