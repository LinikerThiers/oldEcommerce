import { desenharProdutoCarrinhoSimples, lerLocalStorage, apagarDoLocalStorage, salvarLocalStorage} from "./src/utilidades";

function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    for (const chave in idsProdutoCarrinhoComQuantidade) {
        if (idsProdutoCarrinhoComQuantidade.hasOwnProperty(chave)) {
            const [idProduto, tamanho] = chave.split('-');
            desenharProdutoCarrinhoSimples(idProduto, tamanho, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[chave]);
        };
    };
}

function finalizarCompra(event) {
    event.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return;
    }

    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade,
    }

    const historicoDePedidos = lerLocalStorage('historico') ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];

    salvarLocalStorage('historico', historicoDePedidosAtualizado);
    apagarDoLocalStorage('carrinho');
    window.location.href = "./perfil.html";
};


desenharProdutosCheckout();

document.addEventListener("submit", (ev) => finalizarCompra(ev));