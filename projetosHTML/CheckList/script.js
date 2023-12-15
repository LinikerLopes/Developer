// Função para adicionar uma nova fatia (checkbox) à pizza
function addSlice() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task !== '') {
    const pizzaCycle = document.querySelector('.pizza-cycle');
    const newSlice = document.createElement('div');
    newSlice.classList.add('slice');
    
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.className = 'checkbox';
    newCheckbox.id = `slice${pizzaCycle.childElementCount + 1}`;

    const newLabel = document.createElement('label');
    newLabel.htmlFor = `slice${pizzaCycle.childElementCount + 1}`;

    newSlice.appendChild(newCheckbox);
    newSlice.appendChild(newLabel);
    pizzaCycle.appendChild(newSlice);

    taskInput.value = ''; // Limpa o campo de entrada após adicionar a tarefa

    // Adiciona um evento de clique a cada checkbox para alternar o estado marcado/não marcado
    newCheckbox.addEventListener('click', () => {
      newCheckbox.checked = !newCheckbox.checked;
    });
  }
}