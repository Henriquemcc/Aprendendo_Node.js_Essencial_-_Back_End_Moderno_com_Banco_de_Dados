const ProdutoService = require('../services/ProdutoService');
const ProdutoDtoService = require('../services/ProdutoDtoService');
const Produto = require('../models/Produto').Produto;
const NovoProdutoDto = require('../dtos/NovoProdutoDto').NovoProdutoDto;

async function listar(req, res) {
    const produtos = await ProdutoService.listar()
    res.json(produtos);
}

async function buscarPorId(req, res) {
    const produto = await ProdutoService.buscarPorId(req.params.id);
    if (!produto)
        return res.status(404).json({erros: 'Produto não encontrado'});
    res.json(produto);
}

async function cadastrar(req, res) {
    try {
        const novoProdutoDto = new NovoProdutoDto(req.body.nome, req.body.preco, req.body.detalhes);
        const produtoCadastrado = await ProdutoDtoService.cadastrar(novoProdutoDto);
        res.status(201).json(produtoCadastrado);
    } catch (error) {
        console.log("Erro ao adicionar produto");
        res.status(500).send("Erro ao adicionar produto");
    }
}

async function atualizar(req, res) {
    const produto = new Produto(req.body.id, req.body.nome, req.body.preco, req.body.detalhes);
    const produtoAtualizado = await ProdutoService.atualizar(produto, req.params.id);
    res.json(produtoAtualizado)
}

async function deletar(req, res) {
    await ProdutoService.deletar(req.params.id);
    res.status(204).send();
}

module.exports = { listar, buscarPorId, cadastrar, atualizar, deletar };