export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  function activeTab(index) {
    tabContent.forEach((value) => {
      value.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    tabMenu.forEach((value, index) => {
      value.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
