const ProdutoService = require('./ProdutoService');
const NovoProdutoDtoMapper = require('../mappers/NovoProdutoDtoMapper');
const AtualizarProdutoDtoMapper = require('../mappers/AtualizarProdutoDtoMapper');
const ProdutoDtoViewerMapper = require('../mappers/ProdutoDtoViewerMapper');

function listar() {
  const produtos = ProdutoService.listar();
  return produtos.map((produto) => ProdutoDtoViewerMapper.map(produto));
}

function buscarPorId(id) {
  return ProdutoDtoViewerMapper.map(ProdutoService.buscarPorId(id));
}

function cadastrar(novoProdutoDto) {
  const produto = NovoProdutoDtoMapper.map(novoProdutoDto);
  return ProdutoDtoViewerMapper.map(ProdutoService.cadastrar(produto));
}

function atualizar(atualizarProdutoDto, id) {
  const produto = AtualizarProdutoDtoMapper.map(atualizarProdutoDto);
  return ProdutoDtoViewerMapper.map(ProdutoService.atualizar(atualizarProdutoDto, id));
}

function deletar(id) {
  ProdutoService.deletar(id);
}

module.exports = { listar, buscarPorId, cadastrar, atualizar, deletar }