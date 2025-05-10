const ProdutoDtoViewer = require('../dtos/ProdutoDtoViewer').ProdutoDtoViewer;

function map(produto)
{
    return new ProdutoDtoViewer(
        produto.id,
        produto.nome,
        produto.preco,
        produto.detalhes);
}

module.exports = { map };