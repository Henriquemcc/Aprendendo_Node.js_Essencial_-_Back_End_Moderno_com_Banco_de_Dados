const Produto = require("../models/Produto");

let produtosRepository = new Array();

function listar() {
  return this.produtosRepository;
}

function buscarPorId(id) {
  return this.produtosRepository.find((produto) => produto.id == id);
}

function cadastrar(produto) {
  this.produtosRepository.push(produto);
  return produto;
}

function atualizar(produto, id) {
  let produtoAnterior = this.produtosRepository.find(
    (produtoIterado) => produtoIterado.id == id
  );
  produtoAnterior.nome = produto.nome;
  produtoAnterior.preco = produto.preco;
  produtoAnterior.detalhes = produto.detalhes;
  return produtoAnterior;
}

function deletar(id) {
  let indiceProdutoRemovido = this.produtosRepository.findIndex(
    (produtoIterado) => produtoIterado.id == id
  );
  if (indiceProdutoRemovido > -1)
    this.produtosRepository.splice(indiceProdutoRemovido, 1);
}

module.exports = { listar, buscarPorId, cadastrar, atualizar, deletar }