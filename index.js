const express = require("express");
const ProdutoRoute = require('./routes/ProdutoRoute');

const app = express();

app.use((req, res, next) => {
    console.log(new Date().toString(), req.host, req.method, req.url);
    console.log("Headers:", req.headers);
    next();
});

app.use(express.static('public'));

const routerAPI = express.Router();

routerAPI.use(express.urlencoded({ extended: true }));
routerAPI.use(express.json());

routerAPI.get("/API/", function (req, res) {
  res.send("Hello World");
});

routerAPI.get("/API/henrique", function(req, res) {
    res.send("Henrique Mendonça Castelar Campos");
});

routerAPI.get("/API/ola", function(req, res) {
    let nome = req.query.nome;
    res.send(`Olá ${nome}`);
});

routerAPI.get("/API/registro", function (req, res) {
    // monta um formulário HTML par receber os dados do usuário
    res.send(`
        <form method="POST" action="/API/registro">
            <input type="text" name="nome" placeholder="Nome">
            <input type="text" name="email" placeholder="Email">
            <button type="submit">Enviar</button>
        </form>
    `);
});

routerAPI.post("/API/registro", function (req, res) {
    res.send(`Registro recebido com sucesso!<br>
        Usuário ${req.body.nome} cadastrado com sucesso!`)
}
);

routerAPI.use('/API/cafe', function(req, res) {
    res.status(418).send("Sou um bule de chá");
});

routerAPI.use('/API/produtos', ProdutoRoute);

routerAPI.use(function(req, res) {
    console.log("Rota não encontrada")
    res.status(404).send("Rota não encontrada!");
});

// Inicializa o servidor HTTP na porta 3000
routerAPI.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
