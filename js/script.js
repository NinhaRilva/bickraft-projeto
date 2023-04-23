//Ativar links do cabecalho
const links = document.querySelectorAll(".header-menu a");
console.log(links);
function ativarLinks(link) {
 const url = location.href;
  const href = link.href;
  
  if (url.includes(href)) {
    link.classList.add("ativo");
    console.log(link + "  Teste href");
  }

}

links.forEach(ativarLinks);

/// ativar itens do orçcamento

const orcarmentourl = new URLSearchParams(location.search);

function ativarOrcamaneto(paramentro) {
  const elemento = document.getElementById(paramentro);
  if (elemento) {
    elemento.checked = true;
    
  }
  console.log(paramentro);  

 }
orcarmentourl.forEach(ativarOrcamaneto);
 

 // ativar perguntas frequente.


const perguntas = document.querySelectorAll(".perguntas button"); 

function ativarPerguntas(evento) {
  const pergunta = evento.currentTarget;
  const controles = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controles);
  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo");
  console.log(ativo);
  pergunta.setAttribute("aria-expanded", ativo);
 
   
 }
function pegarPerguntar(perguta) {
  perguta.addEventListener("click", ativarPerguntas);
 }
perguntas.forEach(pegarPerguntar);

// Galeria de imagens

const galeriaImg = document.querySelectorAll(".bicicleta-img img");
const galeriaConteiner = document.querySelector(".bicicleta-img");
console.log(galeriaImg+  " " +galeriaConteiner);

function mudarImagem(evento) {
  const img = evento.currentTarget; 
  const midiaQuery = matchMedia("(min-width: 1000px)").matches;
  if (midiaQuery) {
    galeriaConteiner.prepend(img);
     
   }
  



 }
 
function eventoClique(imagem) {
  imagem.addEventListener("click", mudarImagem)
}
galeriaImg.forEach(eventoClique);



















