// Obtém todos os checkboxes
const checkboxes = document.querySelectorAll('.checkbox');

// Adiciona um evento de clique a cada checkbox para alternar o estado marcado/não marcado
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
  });
});