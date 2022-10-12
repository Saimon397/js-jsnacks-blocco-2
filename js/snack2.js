/**const ListaNomi = ["Alessio", "Lorenzo", "Leonardo", "Riccardo", "Simone", "Valentina", "Fabietto", "Jhonny", "Marco", "Mattia"];
const ListaCognomi = ["Madonna", "Gradient", "Veneto", "Custode", "Terrone", "Zussi", "DeRoma", "Bravo", "Brescia", "Reale"];

const NomiRandom = document.getElementById("nome-casuale")
const BTN = document.getElementById("btn")

BTN.addEventListener("click", function() {
    let NomeRandom = ListaNomi[Math.floor(Math.random() * ListaNomi.length)];
    let CognomeRandom = ListaCognomi[Math.floor(Math.random() * ListaCognomi.length)];
    
    NomiRandom.innerHTML = NomeRandom + " " + CognomeRandom
});**/
let BTN = document.getElementById("btn");

BTN.addEventListener("click", function () {
    let ListaInvitati = [];
    document.querySelector('#lista_invitati').innerHTML = '';
    let ListaNomi = ["Alessio", "Lorenzo", "Leonardo", "Riccardo", "Simone", "Valentina", "Fabietto", "Jhonny", "Marco", "Mattia"];
    let ListaCognomi = ["Madonna", "Gradient", "Veneto", "Custode", "Terrone", "Zussi", "DeRoma", "Bravo", "Brescia", "Reale"];

    for (let i = 0; i < 10; i++) {

        let NomeRandom = Math.floor(Math.random() * ListaNomi.length);
        let Nome = ListaNomi[NomeRandom];
        console.log(Nome);

        let CognomeRandom = Math.floor(Math.random() * ListaNomi.length);
        let Cognome = ListaCognomi[CognomeRandom];
        console.log(Cognome);

        ListaInvitati.push(Nome + ' ' + Cognome);

        console.log(ListaInvitati);
        let paragrafo = document.createElement('li');
        document.querySelector('#lista_invitati').append(paragrafo);
        paragrafo.innerHTML = ListaInvitati[i];
    }
})
