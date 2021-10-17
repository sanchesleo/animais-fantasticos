import AnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  async function fetchAnimais(url) {
    try {
      const animaisReponse = await fetch(url);
      const animaisJson = await animaisReponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });

      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    } catch (e) {
      console.log(e);
    }
  }

  fetchAnimais('./animaisapi.json');
}
