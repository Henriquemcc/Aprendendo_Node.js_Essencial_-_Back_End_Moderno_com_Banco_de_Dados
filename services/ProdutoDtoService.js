const ProdutoService = require('./ProdutoService');
const NovoProdutoDtoMapper = require('../mappers/NovoProdutoDtoMapper');
const AtualizarProdutoDtoMapper = require('../mappers/AtualizarProdutoDtoMapper');

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

function atualizar(atualizarProdutoDto, id) {
  const produto = AtualizarProdutoDtoMapper.map(atualizarProdutoDto);
  return ProdutoService.atualizar(atualizarProdutoDto, id);
}

function deletar(id) {
  ProdutoService.deletar(id);
}

module.exports = { listar, buscarPorId, cadastrar, atualizar, deletar }