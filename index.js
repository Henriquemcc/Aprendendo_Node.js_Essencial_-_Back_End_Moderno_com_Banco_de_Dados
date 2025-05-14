const express = require("express");
const ProdutoRoute = require('./routes/ProdutoRoute');

const app = express();

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

routerAPI.use('/produtos', ProdutoRoute);