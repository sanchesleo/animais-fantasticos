export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  function onMouseOver(event) {
    const onMouseMove = {
      handleEvent(_event) {
        this.tooltipBox.style.top = `${_event.pageY + 20}px`;
        this.tooltipBox.style.left = `${_event.pageX + 20}px`;
      },
    };

    const onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mouseleave', onMouseMove);
      },
    };

    function criarTooltipBox(element) {
      const tooltipBox = document.createElement('div');
      const text = element.getAttribute('aria-label');

      tooltipBox.classList.add('tooltip');
      tooltipBox.innerText = text;

      document.body.appendChild(tooltipBox);

      return tooltipBox;
    }

    const tooltipBox = criarTooltipBox(this);

    tooltipBox.style.top = `${event.pageY}px`;
    tooltipBox.style.left = `${event.pageX}px`;

    onMouseMove.tooltipBox = tooltipBox;

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;

    this.addEventListener('mouseleave', onMouseLeave);
    this.addEventListener('mousemove', onMouseMove);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
