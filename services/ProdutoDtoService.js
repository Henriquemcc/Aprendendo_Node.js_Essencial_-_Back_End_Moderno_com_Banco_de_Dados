const ProdutoService = require('./ProdutoService');
const NovoProdutoDtoMapper = require('../mappers/NovoProdutoDtoMapper');

function listar() {
  return ProdutoService.listar();
}

function buscarPorId(id) {
  return ProdutoService.buscarPorId(id);
}

function cadastrar(novoProdutoDto) {
  const produto = NovoProdutoDtoMapper.map(novoProdutoDto);
  return ProdutoService.cadastrar(produto);
}

function atualizar(produto, id) {
  return ProdutoService.atualizar(produto, id);
}

function deletar(id) {
  ProdutoService.deletar(id);
}

module.exports = { listar, buscarPorId, cadastrar, atualizar, deletar }