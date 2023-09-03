const catalogoProdutos = document.getElementById('container-produto');

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'))

    for(const produto of produtosEscondidos) {
        produto.classList.remove('hidden')
    }
}

function esconderMasculinos() {
    const produtosMasculinos = Array.from(catalogoProdutos.getElementsByClassName('masculino'));
    const produtosFemininos = Array.from(catalogoProdutos.getElementsByClassName('feminino'));

    for(const produto of produtosMasculinos) {
        produto.classList.add('hidden')
    };

    for(const produto of produtosFemininos) {
        produto.classList.remove('hidden')
    };
};

function esconderFemininos() {
    const produtosFemininos = Array.from(catalogoProdutos.getElementsByClassName('feminino'));
    const produtosMasculinos = Array.from(catalogoProdutos.getElementsByClassName('masculino'));

    for(const produto of produtosFemininos) {
        produto.classList.add('hidden')
    };

    for(const produto of produtosMasculinos) {
        produto.classList.remove('hidden')
    };
};

export function inicializarFiltros(){
    document.getElementById('exibir-todos').addEventListener('click', exibirTodos);
    document.getElementById('exibir-femininos').addEventListener('click', esconderMasculinos);
    document.getElementById('exibir-masculinos').addEventListener('click', esconderFemininos);
}