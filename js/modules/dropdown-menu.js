import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active');
    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach(
      (userEvent) => {
        menu.addEventListener(userEvent, handleClick);
      },
    );
  });
}