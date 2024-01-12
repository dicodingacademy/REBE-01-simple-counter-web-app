function main() {
  let counterValue = localStorage.getItem('counter-value') ?? 0;

  const display = document.getElementById('display');
  const increaseButton = document.getElementById('increaseButton');
  const decreaseButton = document.getElementById('decreaseButton');

  function displayCounter() {
    display.innerText = counterValue;
  }

  function syncStorage() {
    localStorage.setItem('counter-value', counterValue);
  }

  increaseButton.addEventListener('click', () => {
    counterValue++;
    displayCounter();
    syncStorage();
  });

  decreaseButton.addEventListener('click', () => {
    counterValue--;
    displayCounter();
    syncStorage();
  });

  displayCounter();
}

document.addEventListener('DOMContentLoaded', main);
