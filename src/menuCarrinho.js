import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};


function fecharCarrinho() {
    document.getElementById('carrinho').classList.remove('right-[0px]');
    document.getElementById('carrinho').classList.add('right-[-360px]');
};

function abrirCarrinho() {
    document.getElementById('carrinho').classList.remove('right-[-360px]');
    document.getElementById('carrinho').classList.add('right-[0px]');
};

function abrirMenuHamb() {
    document.getElementById('menu-hamb').classList.remove('right-[-360px]');
    document.getElementById('menu-hamb').classList.add('right-[0px]');
};

function fecharMenuHamb() {
    document.getElementById('menu-hamb').classList.remove('right-[0px]');
    document.getElementById('menu-hamb').classList.add('right-[-360px]');
};

function irParaCheckout() {
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return
    };
    window.location.href = "./checkout.html";
};

export function iniciarCarrinho() {
    const fechar = document.getElementById('fechar-carrinho');
    const abrir = document.getElementById('abrir-carrinho');
    const menuHamburAbrir = document.getElementById('abrir-menu-hamb');
    const menuHamburFechar = document.getElementById('fechar-menu-hamb');
    const main = document.getElementById('main');
    const carrinhoMenuHambur = document.getElementById('carrinho-menu-hamb');
    const botaoIrParaCheckout = document.getElementById('finalizar-compra');

    abrir.addEventListener("click", abrirCarrinho);
    fechar.addEventListener("click", fecharCarrinho);
    menuHamburAbrir.addEventListener("click", abrirMenuHamb);
    menuHamburFechar.addEventListener("click", fecharMenuHamb);
    carrinhoMenuHambur.addEventListener("click", abrirCarrinho);
    main.addEventListener("click", fecharCarrinho);
    main.addEventListener("click", fecharMenuHamb);
    botaoIrParaCheckout.addEventListener("click", irParaCheckout);
};

function removerDoCarrinho(chave) {
    delete idsProdutoCarrinhoComQuantidade[chave];
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto(chave) {
        // const chave = `${idProduto}-${tamanho}`;
        idsProdutoCarrinhoComQuantidade[chave]++;
        salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
        atualizarPrecoCarrinho();
        atualizarInformacaoQuantidade(chave);
}
function decrementarQuantidadeProduto(chave) {
    // const chave = `${idProduto}-${tamanho}`;
    if (idsProdutoCarrinhoComQuantidade[chave] === 1) {
        removerDoCarrinho(chave);
        return;
    }
    idsProdutoCarrinhoComQuantidade[chave]--;
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(chave);
};

function atualizarInformacaoQuantidade(chave) {
    document.getElementById(`quantidade-${chave}`).innerText = idsProdutoCarrinhoComQuantidade[chave];
};

function desenharProdutoNoCarinho(idProduto, tamanho) {

    const produto = catalogo.find(p => p.id == idProduto); // find = ache
    // const tamanho = produto.tamanho[numero];

    const chave = `${idProduto}-${tamanho}`;

    const containerProdutosCarinho = document.getElementById('produtos-carrinho');

    const elementoArticle = document.createElement("article");
    const articleClasses = [
        "flex",
        "bg-slate-100",
        "rounded-md",
        "p-1",
        "relative",
        "mb-1",
    ];
    
    for(const classe of articleClasses) {
        elementoArticle.classList.add(classe);
    };

    const precoFormatado = produto.preco.toFixed(2).replace('.', ',');

    const cartaoProdutoCarrinho = `<button id="tirar-produto-${chave}"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800 absolute top-1 right-1"></i></button>
        <img src="./assets/img/${produto.nomeImagem}" alt="Carrinho: ${produto.nome}" class="h-24 w-32 rounded mr-1">
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-950 font-medium text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: ${tamanho}</p>
        <p class="text-green-600 font-bold text-md">R$${precoFormatado}</p>
      </div>
      <div class="flex text-slate-950 items-end absolute bottom-1 right-2 text-lg">
        <button id='decrementar-produto-${chave}'>-</button>
        <p id='quantidade-${chave}' class="ml-3">${idsProdutoCarrinhoComQuantidade[chave]}</p>
        <button class="ml-3" id='incrementar-produto-${chave}'>+</button>
      </div>`;

      elementoArticle.innerHTML = cartaoProdutoCarrinho

      containerProdutosCarinho.appendChild(elementoArticle);

      document.getElementById(`decrementar-produto-${chave}`).addEventListener("click", () => decrementarQuantidadeProduto(chave));
      document.getElementById(`incrementar-produto-${chave}`).addEventListener("click", () => incrementarQuantidadeProduto(chave));

      document.getElementById(`tirar-produto-${chave}`).addEventListener("click", () => removerDoCarrinho(chave));


};

export function renderizarProdutosCarrinho() {
    const containerProdutosCarinho = document.getElementById("produtos-carrinho");
    containerProdutosCarinho.innerHTML = "";

    for (const chave in idsProdutoCarrinhoComQuantidade) {
        if (idsProdutoCarrinhoComQuantidade.hasOwnProperty(chave)) {
            const [idProduto, tamanho] = chave.split('-');
            desenharProdutoNoCarinho(idProduto, tamanho);
        }
    };
};

export function adicionarAoCarrinho(idProduto, numero) {
    const produto = catalogo.find(p => p.id == idProduto); // find = ache
    const tamanho = produto.tamanho[numero];

    const chave = `${idProduto}-${tamanho}`;

    if (idsProdutoCarrinhoComQuantidade[chave]) {
        incrementarQuantidadeProduto(chave);
        return;
    }
    idsProdutoCarrinhoComQuantidade[chave] = 1;
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
    desenharProdutoNoCarinho(idProduto, tamanho); 
    atualizarPrecoCarrinho();  
};


export function atualizarPrecoCarrinho() {
    const precoCarrinho = document.getElementById('preco-total');
    let precoTotalCarrinho = 0;

    for (const chave in idsProdutoCarrinhoComQuantidade) {
        if (idsProdutoCarrinhoComQuantidade.hasOwnProperty(chave)) {
            const [idProduto, tamanho] = chave.split('-');
            const produto = catalogo.find(p => p.id === idProduto);
            const quantidade = idsProdutoCarrinhoComQuantidade[chave];

            const subtotal = produto.preco * quantidade;

            precoTotalCarrinho += subtotal;

        };
    };

    precoCarrinho.innerText = `Total: R$${precoTotalCarrinho.toFixed(2).replace('.', ',')}`;
}
