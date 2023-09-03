export const catalogo = [{
    id: "1",
    marca: "OLD",
    nome: "Camisa Azul OLD Logo Amarelo Centro",
    preco: 79.99,
    nomeImagem: "camisa-1.jpg",
    feminino: false,
    tamanho: ["P", "M", "G"],
},
{
    id: "2",
    marca: "OLD",
    nome: "Camisa Branca OLD Logo Centro",
    preco: 69.99,
    nomeImagem: "camisa branca logo old centro.jpg",
    feminino: false,
    tamanho: ["P", "M", "G"],
},
{
    id: "3",
    marca: "OLD",
    nome: "Camisa Branca OLD Logo Glitch",
    preco: 69.99,
    nomeImagem: "camisa branca old logo glitch.jpg",
    feminino: false,
    tamanho: ["P", "M", "G"],
},
{
    id: "4",
    marca: "OLD",
    nome: "Camisa Grafite Grenn Branca",
    preco: 89.99,
    nomeImagem: "camisa grafite green.jpg",
    feminino: false,
    tamanho: ["P", "M", "G"],
},
{
    id: "5",
    marca: "OLD",
    nome: "Camisa Logo Box Branca",
    preco: 79.99,
    nomeImagem: "camisa logo box.jpg",
    feminino: false,
    tamanho: ["P", "M", "G"],
},
{
    id: "6",
    marca: "OLD",
    nome: "Camisa Logo OLD Centro Amarela",
    preco: 69.99,
    nomeImagem: "camisa logo old centro amarela.jpg",
    feminino: true,
    tamanho: ["P", "M", "G"],
},
{
    id: "7",
    marca: "OLD",
    nome: "Camisa Logo OLD Centro Roxa",
    preco: 69.99,
    nomeImagem: "camisa-2.jpg",
    feminino: true,
    tamanho: ["P", "M", "G"],
},
{
    id: "8",
    marca: "OLD",
    nome: "Camisa Logo OLD Grafite Asa",
    preco: 89.99,
    nomeImagem: "camisa logo old grafite asa.jpg",
    feminino: false,
    tamanho: ["P", "M", "G"],
},
{
    id: "9",
    marca: "OLD",
    nome: "Camisa OLD Emoji",
    preco: 79.99,
    nomeImagem: "Camisa old emoji.jpg",
    feminino: true,
    tamanho: ["P", "M", "G"],
},
{
    id: "10",
    marca: "OLD",
    nome: "Camisa OLD Jelly Citrum",
    preco: 79.99,
    nomeImagem: "camisa OLD jelly citrum.jpg",
    feminino: true,
    tamanho: ["P", "M", "G"],
},
{
    id: "11",
    marca: "OLD",
    nome: "Camisa OLD Logo Centro Red",
    preco: 69.99,
    nomeImagem: "camisa old logo centro red.jpg",
    feminino: false,
    tamanho: ["P", "M", "G"],
},
{
    id: "12",
    marca: "OLD",
    nome: "Camisa OLD Roses Centro Amarela",
    preco: 89.99,
    nomeImagem: "camisa old roses centro amarelo.jpg",
    feminino: true,
    tamanho: ["P", "M", "G"],
},
{
    id: "13",
    marca: "OLD",
    nome: "Camisa Preta Logo Mini",
    preco: 69.99,
    nomeImagem: "camisa preta logo mini.jpg",
    feminino: false,
    tamanho: ["P", "M", "G"],
},
{
    id: "14",
    marca: "OLD",
    nome: "Camisa Preta Logo OLD College",
    preco: 69.99,
    nomeImagem: "camisa preta logo old college.jpg",
    feminino: true,
    tamanho: ["P", "M", "G"],
},
{
    id: "15",
    marca: "OLD",
    nome: "Camisa Rosa OLD GLitch",
    preco: 79.99,
    nomeImagem: "camisa rosa old glitch.jpg",
    feminino: true,
    tamanho: ["P", "M", "G"],
},
{
    id: "16",
    marca: "OLD",
    nome: "Camisa OLD Logo Yellow Red",
    preco: 79.99,
    nomeImagem: "mockup camisa old B_Y vermelha.jpg",
    feminino: false,
    tamanho: ["P", "M", "G"],
},
{
    id: "17",
    marca: "OLD",
    nome: "Camisa OLD Jelly Preta",
    preco: 79.99,
    nomeImagem: "camisa OLD jelly preta.jpg",
    feminino: true,
    tamanho: ["P", "M", "G"],
},
{
    i: "18",
    marca: "OLD",
    nome: "Camisa OLD Wear College",
    preco: 69.99,
    nomeImagem: "camisa old wear college.jpg",
    feminino: false,
    tamanho: ["P", "M", "G"],
},
{
    id: "19",
    marca: "OLD",
    nome: "Camisa OLD Vênus De Milo Azul",
    preco: 99.99,
    nomeImagem: "mockup camisa Vênus de milo central azul.jpg",
    feminino: false,
    tamanho: ["P", "M", "G"],
},
{
    id: "20",
    marca: "OLD",
    nome: "Camisa OLD Vênus De Milo Preta",
    preco: 99.99,
    nomeImagem: "mockup camisa Vênus de milo central preta.jpg",
    feminino: true,
    tamanho: ["P", "M", "G"],
},
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
};

export function lerLocalStorage(chave) {
   return JSON.parse(localStorage.getItem(chave));
};

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
};

 export function desenharProdutoCarrinhoSimples(idProduto, tamanho, idContainerHtml, quantidadeProduto) {

    const produto = catalogo.find(p => p.id == idProduto); // find = ache
    // const tamanho = produto.tamanho[numero];

    const chave = `${idProduto}-${tamanho}`;

    const containerProdutosCarinho = document.getElementById(idContainerHtml);

    const elementoArticle = document.createElement("article");
    const articleClasses = [
        "flex",
        "bg-stone-200",
        "rounded-md",
        "p-1",
        "relative",
        "mb-2",
        "w-96",
    ];
    
    for(const classe of articleClasses) {
        elementoArticle.classList.add(classe);
    };

    const precoFormatado = produto.preco.toFixed(2).replace('.', ',');

    const cartaoProdutoCarrinho = `
        <img src="./assets/img/${produto.nomeImagem}" alt="Carrinho: ${produto.nome}" class="h-24 w-32 rounded mr-1">
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-950 font-medium text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: ${tamanho}</p>
        <p class="text-green-600 font-bold text-md">R$${precoFormatado}</p>
      </div>
      <div class="flex text-slate-950 items-end absolute bottom-1 right-2 text-lg">
        <p id='quantidade-${chave}' class="ml-3">${quantidadeProduto}</p>
      </div>`;

      elementoArticle.innerHTML = cartaoProdutoCarrinho

      containerProdutosCarinho.appendChild(elementoArticle);

};