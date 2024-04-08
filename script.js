function findMinMax() {
    const numbersInput = document.getElementById('numbers').value;
    const numbersArray = numbersInput.split(',').map(Number);
   
    const maxNumber = Math.max(...numbersArray);
    const minNumber = Math.min(...numbersArray);
   
    document.getElementById('result').innerText = `Nejvyšší číslo v poli je: ${maxNumber}, nejnižší číslo v poli je: ${minNumber}`;
  }