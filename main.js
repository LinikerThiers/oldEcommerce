import { renderizarCatalogo } from "./src/cartaoProduto";
import { atualizarPrecoCarrinho, iniciarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho"; 
import { inicializarFiltros } from "./src/filtroCatalogo";


renderizarCatalogo();
renderizarProdutosCarrinho();
iniciarCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();



