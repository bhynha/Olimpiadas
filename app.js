function pesquisar() {
  // Essa função é responsável por realizar uma pesquisa e exibir os resultados.
  

  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value


  if(!campoPesquisa == ""){
    section.innerHTML  = " <p> Nada foi encontrado. Você não inseriu uma informação para pesquisa. </p>"
    return
  }
  
  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";


  // Itera sobre os dados da pesquisa
  for (let dado of dados) {
    titulo= dado.titulo.toLowerCase ()
    descricao = dado.descricao.toLowerCase ()
    tags = dado.tags.toLowerCase ()

    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) 
      {
      // Cria um novo elemento
      resultados += `<div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.nome}</a>
        </h2>
        <p class="descricao-meta"> ${dado.descrição}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>`;
    }
  }

  if(!resultados){
    resultado = "<p> Nada foi encontrado </p>"
  }

  // Atribui os resultados à seção HTML
  section.innerHTML = resultados;
}