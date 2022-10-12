const Numeri = [];
const Label = document.getElementById('my-label');
const NumeriCont = document.getElementById('numeri');
const BTN = document.getElementById('btn');
const SommaDispari = document.getElementById('somma-dispari');

let count = 0;
BTN.addEventListener('click', function () {

    numeriValue = parseInt(NumeriCont.value);
    Numeri.push(numeriValue);
    if (Numeri.length === 10) {
        console.table(Numeri);
        let numeriStamp = 0;
        while (count < 10) {
            let numeriIns = Numeri[count];
            if (count % 2) {
                numeriStamp += numeriIns;
            }
            console.log(numeriStamp);
            count++
        }
        SommaDispari.innerText = numeriStamp;
    }
});