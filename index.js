const express = require("express");
const ProdutoRoute = require('./routes/ProdutoRoute');

const app = express();

const knexConfig = require("knexfile");
const knex = require("knex")(knexConfig.development);

app.use((req, res, next) => {
    console.log(new Date().toString(), req.host, req.method, req.url);
    console.log("Headers:", req.headers);
    next();
});

const routerAPI = express.Router();
app.use('/api', routerAPI);
app.use(express.static('public'));
app.use(function(req, res) {
    console.log("Rota não encontrada")
    res.status(404).send("Rota não encontrada!");
});

// Inicializa o servidor HTTP na porta 3000
app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});

routerAPI.use(express.urlencoded({ extended: true }));
routerAPI.use(express.json());

routerAPI.get("/", function (req, res) {
  res.send("Hello World");
});

routerAPI.get("/henrique", function(req, res) {
    res.send("Henrique Mendonça Castelar Campos");
});

routerAPI.get("/ola", function(req, res) {
    let nome = req.query.nome;
    res.send(`Olá ${nome}`);
});

routerAPI.get("/registro", function (req, res) {
    // monta um formulário HTML par receber os dados do usuário
    res.send(`
        <form method="POST" action="/api/registro">
            <input type="text" name="nome" placeholder="Nome">
            <input type="text" name="email" placeholder="Email">
            <button type="submit">Enviar</button>
        </form>
    `);
});

routerAPI.post("/registro", function (req, res) {
    res.send(`Registro recebido com sucesso!<br>
        Usuário ${req.body.nome} cadastrado com sucesso!`)
}
);

routerAPI.use('/cafe', function(req, res) {
    res.status(418).send("Sou um bule de chá");
});

routerAPI.use('/produtos', ProdutoRoute);