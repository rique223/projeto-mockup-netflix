const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
  removeBorder();
  removeShow();
  // Adicionar borda ao item selecionado
  this.classList.add('tab-border');

  // Pegar o content item do DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);

  // Adicionar a classe SHOW ao elemento
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// Evente listener para quando um dos icones for clicado
tabItems.forEach(item => item.addEventListener('click', selectItem));
