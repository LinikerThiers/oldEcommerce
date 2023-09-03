import { lerLocalStorage, desenharProdutoCarrinhoSimples  } from "./src/utilidades";

function criarPedidoHistorico(pedidoComData) {
    const elementoPedido = `<p class="text-lg font-bold text-slate-200 bg-slate-950 rounded-md px-3 py-1 my-4">${new Date(pedidoComData.dataPedido).toLocaleDateString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    })}</p>

    <section id='container-pedidos-${pedidoComData.dataPedido}' class="bg-slate-500 p-3 rounded-md"></section>`;

    const main = document.getElementsByTagName('main')[0]
    main.innerHTML += elementoPedido;

    for(const chave in pedidoComData.pedido) {
        if (pedidoComData.pedido.hasOwnProperty(chave)) {
            const [idProduto, tamanho] = chave.split('-');
        desenharProdutoCarrinhoSimples(idProduto, tamanho, `container-pedidos-${pedidoComData.dataPedido}`, pedidoComData.pedido[chave])
        };
    };
};

function renderizarHistoricoPedidos() {
    const historico = lerLocalStorage('historico');
    for(const pedidoComData of historico) {
        criarPedidoHistorico(pedidoComData);
    }
}

function abrirMenuHamb() {
    document.getElementById('menu-hamb').classList.remove('right-[-360px]');
    document.getElementById('menu-hamb').classList.add('right-[0px]');
};

function fecharMenuHamb() {
    document.getElementById('menu-hamb').classList.remove('right-[0px]');
    document.getElementById('menu-hamb').classList.add('right-[-360px]');
};

function iniciarMenuHamb() {
    // const fechar = document.getElementById('fechar-carrinho');
    // const abrir = document.getElementById('abrir-carrinho');
    const menuHamburAbrir = document.getElementById('abrir-menu-hamb');
    const menuHamburFechar = document.getElementById('fechar-menu-hamb');
    const main = document.getElementById('main');
    // const carrinhoMenuHambur = document.getElementById('carrinho-menu-hamb');
    // const botaoIrParaCheckout = document.getElementById('finalizar-compra');

    // abrir.addEventListener("click", abrirCarrinho);
    // fechar.addEventListener("click", fecharCarrinho);
    menuHamburAbrir.addEventListener("click", abrirMenuHamb);
    menuHamburFechar.addEventListener("click", fecharMenuHamb);
    // carrinhoMenuHambur.addEventListener("click", abrirCarrinho);
    // main.addEventListener("click", fecharCarrinho);
    main.addEventListener("click", fecharMenuHamb);
    // botaoIrParaCheckout.addEventListener("click", irParaCheckout);
};

renderizarHistoricoPedidos();
iniciarMenuHamb();