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

app.use(express.urlencoded({ extended: true }));

app.post("/registro", function (req, res) {
    res.send(`Registro recebido com sucesso!<br>
        Usuário ${req.body.nome} cadastrado com sucesso!`)
}
);

// Inicializa o servidor HTTP na porta 3000
app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
