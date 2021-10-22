export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada item em relação ao topo do site
  getDistance() {
    // Fazemos a desestruturação por ser um nodelist
    // precisamos tranformar em array
    this.distance = [...this.sections].map((section) => {
      // offsetTop pega a distância da section para o topo
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
