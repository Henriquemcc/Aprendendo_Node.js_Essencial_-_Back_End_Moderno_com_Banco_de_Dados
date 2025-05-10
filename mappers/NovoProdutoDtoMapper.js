const Produto = require('../models/Produto').Produto;

function map(atualizarProdutoDto)
{
    return new Produto(
        0, atualizarProdutoDto.nome,
        atualizarProdutoDto.preco,
        atualizarProdutoDto.detalhes);
}

module.exports = { map };