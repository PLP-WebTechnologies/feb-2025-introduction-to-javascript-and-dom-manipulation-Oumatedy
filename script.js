function changeText() {
    const info = document.getElementById('teamInfo');
    info.textContent = "Chelsea FC has won the UEFA Champions League twice!";
  }
  
  function changeStyle() {
    const box = document.getElementById('dynamicBox');
    box.style.backgroundColor = 'navy';
    box.style.color = 'white';
    box.style.border = '2px solid gold';
  }
  
  function toggleElement() {
    const existing = document.getElementById('newElement');
    if (existing) {
      existing.remove();
    } else {
      const newElement = document.createElement('p');
      newElement.id = 'newElement';
      newElement.textContent = 'Go Blues! 💙';
      document.body.appendChild(newElement);
    }
  }
  