import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações
  // com o toal de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function criarhAnimais() {
    try {
      // fetch e espera a resposta e transforma em json
      const animaisReponse = await fetch(url);
      // Transforma a resposta em json
      const animaisJson = await animaisReponse.json();

      // Após a transformação de json, ativa as funções para preencher e animar os números
      animaisJson.forEach((animal) => preencherAnimais(animal));

      animaAnimaisNumeros();
    } catch (e) {
      console.log(e);
    }
  }

  return criarhAnimais();
}
