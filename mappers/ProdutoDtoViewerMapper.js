const ProdutoDtoViewer = require('../models/ProdutoDtoViewer').ProdutoDtoViewer;

function map(produto)
{
    return new Produto(
        produto.id,
        produto.nome,
        produto.preco,
        produto.detalhes);
}

module.exports = { map };