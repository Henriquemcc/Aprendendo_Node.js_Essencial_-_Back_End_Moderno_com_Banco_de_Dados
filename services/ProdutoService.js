const produtosRepository = new Array();

function listar() {
  return produtosRepository;
}

function buscarPorId(id) {
  return produtosRepository.find((produto) => produto.id == id);
}

function cadastrar(produto) {
  produtosRepository.push(produto);
  return produto;
}

function atualizar(produto, id) {
  let produtoAnterior = produtosRepository.find(
    (produtoIterado) => produtoIterado.id == id
  );
  produtoAnterior.nome = produto.nome;
  produtoAnterior.preco = produto.preco;
  produtoAnterior.detalhes = produto.detalhes;
  return produtoAnterior;
}

function deletar(id) {
  let indiceProdutoRemovido = produtosRepository.findIndex(
    (produtoIterado) => produtoIterado.id == id
  );
  if (indiceProdutoRemovido > -1)
    produtosRepository.splice(indiceProdutoRemovido, 1);
}

module.exports = { listar, buscarPorId, cadastrar, atualizar, deletar }