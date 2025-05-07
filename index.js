const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(new Date().toString(), req.host, req.method, req.url);
    next();
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

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

app.get("/registro", function (req, res) {
    // monta um formulário HTML par receber os dados do usuário
    res.send(`
        <form method="POST" action="/registro">
            <input type="text" name="nome" placeholder="Nome">
            <input type="text" name="email" placeholder="Email">
            <button type="submit">Enviar</button>
        </form>
    `);
});

app.post("/registro", function (req, res) {
    res.send(`Registro recebido com sucesso!<br>
        Usuário ${req.body.nome} cadastrado com sucesso!`)
}
);

const produtos = [
    { id: 1, nome: 'Produto 1', preco: 10.00 },
    { id: 2, nome: 'Produto 2', preco: 20.00 },
    { id: 3, nome: 'Produto 3', preco: 30.00 }
]

app.get("/produtos", function(req, res) {
    res.json(produtos);
})

// Inicializa o servidor HTTP na porta 3000
app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
