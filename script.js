function translatePage(lang) {
  fetch('data/translations.json')
      .then(response => response.json())
      .then(data => {
          document.querySelectorAll('[data-translate]').forEach(el => {
              el.textContent = data[lang][el.dataset.translate];
          });
      });
}
document.addEventListener('DOMContentLoaded', () => translatePage('en'));
