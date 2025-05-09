const Produto = require('../models/Produto');

class ProdutoService{
    
    constructor() {
        this.produtosRepository = new Array();
    }

    listar() {
        return this.produtosRepository;
    }

    buscarPorId(id) {
        return this.produtosRepository.find((produto) => produto.id == id);
    }

    cadastrar(produto) {
        this.produtosRepository.push(produto);
        return produto
    }

    atualizar(produto, id) {
        let produtoAnterior = this.produtosRepository.find((produtoIterado) => produtoIterado.id == id);
        produtoAnterior.nome = produto.nome
        produtoAnterior.preco = produto.preco
        produtoAnterior.detalhes = produto.detalhes
        return produtoAnterior
    }

    deletar(id) {
        let indiceProdutoRemovido = this.produtosRepository.findIndex((produtoIterado, _, _) => produtoIterado.id == id)
        if (indiceProdutoRemovido > -1)
            this.produtosRepository.splice(indiceProdutoRemovido, 1);
    }
}