import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";


export function renderizarCatalogo(){ 
    for (let produtoCatalogo of catalogo) {
        const precoFormatado = produtoCatalogo.preco.toFixed(2).replace('.', ',');
        const cartaoProduto = `<div class='w-72 m-2 flex flex-col rounded shadow-xl shadow-slate-400 p-2 justify-between group ${produtoCatalogo.feminino ? 'feminino' : 'masculino'}' id="card-produto-${produtoCatalogo.id}"><a href="#">
        <img src="./assets/img/${produtoCatalogo.nomeImagem}" alt="Camisa Azul Old logo" 
        class="rounded group-hover:scale-105 duration-300 my-3"/></a>
        <p class='text-sm font-bold'>${produtoCatalogo.marca}</p>
        <p class='text-sm'>${produtoCatalogo.nome}</p>
        <p class='text-sm font-bold'>R$ ${precoFormatado}</p>
        <div id="tamanhos">
    <label for="tamanhos-${produtoCatalogo.id}" class="text-sm">Escolha um Tamanho:</label>
    <select id="tamanhos-${produtoCatalogo.id}">
        <option class="text-sm" value="0">${produtoCatalogo.tamanho[0]}</option>
        <option class="text-sm" value="1">${produtoCatalogo.tamanho[1]}</option>
        <option class="text-sm" value="2">${produtoCatalogo.tamanho[2]}</option>
    </select>
        </div>
        <button id='adicionar-${produtoCatalogo.id}' class='border border-slate-300 hover:border-slate-400 bg-slate-950 hover:bg-slate-800 text-slate-200 rounded'><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;

        document.getElementById("container-produto").innerHTML += cartaoProduto;

    }

    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => { 
            let selectId = `tamanhos-${produtoCatalogo.id}`
            let select = document.getElementById(selectId);
            let valorSelecionado = select.value;
            let numero = parseInt(valorSelecionado);
            adicionarAoCarrinho(produtoCatalogo.id, numero);
        });
    }

};

