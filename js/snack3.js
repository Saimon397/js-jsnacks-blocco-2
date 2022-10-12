const Numeri = [];
const Label = document.getElementById('my-label');
const NumeriCont = document.getElementById('numeri');
const BTN = document.getElementById('btn');
const SommaDispari = document.getElementById('somma-dispari');

let c = 0;
BTN.addEventListener('click', function () {

    numeriValue = parseInt(NumeriCont.value);
    Numeri.push(numeriValue);
    if (Numeri.length === 10) {
        console.table(Numeri);
        NumeriCont.classList.add('d-none');
        BTN.classList.add('d-none');
        Label.classList.add('d-none');
        let numeriPrint = 0;
        while (c < 10) {
            let numeriStamp = Numeri[c];
            if (c % 2) {
                numeriPrint += numeriStamp;
            }
            console.log(numeriPrint);
            c++
        }
        SommaDispari.innerText = numeriPrint;
    }
});