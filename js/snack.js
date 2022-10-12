let generateButton = document.getElementById('invia');
generateButton.addEventListener('click', function () {
    let inputNumber = parseInt(document.getElementById(`number`).value);
    let = document.getElementById(`result`).value;

    if ((inputNumber % 2) !== 0) {

        let numeroPlus = inputNumber + 1;
        document.getElementById('result').innerHTML = `numero inserito errato, passo al successivo: ${numeroPlus}`;
    }

    else {
        document.getElementById('result').innerHTML = `${inputNumber} è pari`;
    }

});