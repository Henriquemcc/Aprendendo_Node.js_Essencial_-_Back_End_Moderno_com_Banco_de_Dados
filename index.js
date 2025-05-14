const express = require("express");
const ProdutoRoute = require('./routes/ProdutoRoute');

const app = express();

app.use((req, res, next) => {
    console.log(new Date().toString(), req.host, req.method, req.url);
    console.log("Headers:", req.headers);
    next();
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.get("/API/", function (req, res) {
  res.send("Hello World");
});

app.get("/API/henrique", function(req, res) {
    res.send("Henrique Mendonça Castelar Campos");
});

app.get("/API/ola", function(req, res) {
    let nome = req.query.nome;
    res.send(`Olá ${nome}`);
});

app.get("/API/registro", function (req, res) {
    // monta um formulário HTML par receber os dados do usuário
    res.send(`
        <form method="POST" action="/API/registro">
            <input type="text" name="nome" placeholder="Nome">
            <input type="text" name="email" placeholder="Email">
            <button type="submit">Enviar</button>
        </form>
    `);
});

app.post("/API/registro", function (req, res) {
    res.send(`Registro recebido com sucesso!<br>
        Usuário ${req.body.nome} cadastrado com sucesso!`)
}
);

app.use('/API/cafe', function(req, res) {
    res.status(418).send("Sou um bule de chá");
});

app.use('/API/produtos', ProdutoRoute);

app.use(function(req, res) {
    console.log("Rota não encontrada")
    res.status(404).send("Rota não encontrada!");
});

// Inicializa o servidor HTTP na porta 3000
app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
