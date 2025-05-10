const Produto = require('../models/Produto').Produto;

function map(novoProdutoDto)
{
    return new Produto(
        0, novoProdutoDto.nome,
        novoProdutoDto.preco,
        novoProdutoDto.detalhes);
}

module.exports = { map };