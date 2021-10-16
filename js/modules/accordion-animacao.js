export default function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const ativoClass = 'ativo';

  function activeAccordion() {
    this.classList.toggle(ativoClass);
    this.nextElementSibling.classList.toggle(ativoClass);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);

    accordionList.forEach((value) => {
      value.addEventListener('click', activeAccordion);
    });
  }
}
