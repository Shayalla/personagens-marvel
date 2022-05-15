const homenDeFerro = document.getElementById('homemDeFerro');
// const homenDeFerro = document.getElementById('homemDeFerro');
// const homenDeFerro = document.getElementById('homemDeFerro');
// const homenDeFerro = document.getElementById('homemDeFerro');
// const homenDeFerro = document.getElementById('homemDeFerro');
// const homenDeFerro = document.getElementById('homemDeFerro');
// const homenDeFerro = document.getElementById('homemDeFerro');
// const homenDeFerro = document.getElementById('homemDeFerro');
// const homenDeFerro = document.getElementById('homemDeFerro');

// homenDeFerro.addEventListener('mouseenter', () => {
//   homemDeFerro.classList.add('selecionado')
// })

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    // const personagemSelecionado = document.querySelectorAll('.selecionado');
    // personagemSelecionado.classList.remove('selecionado');
    // el.classList.add('selecionado');
    const idSelecionado = el.attributes.id.value;
    const nome = document.getElementById('nome-personagem');

    const imgGrande = document.getElementById('personagem-img-grande');
    imgGrande.src = `./src/imagens/${idSelecionado}.png`;

    const nomeSelecionado = el.getAttribute('data-name');
    nome.innerHTML = nomeSelecionado;
  });
});
