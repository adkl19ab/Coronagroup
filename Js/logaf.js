// log af funktion som først henter information i localstorage
// derefter kører den et loop igennem som tjekker efter brugere med en property med navnet Online og værdien true.
// hvis den så findes ændres den til false og brugeren bliver sendt tilbage til startsiden.
function logOff() {
    currentClient = JSON.parse(localStorage.getItem('Brugere'));

    for (let i = 0; i < currentClient.length; i++) {
        if (currentClient[i].Online === true) {
            currentClient[i].Online = false;
            localStorage.setItem('Brugere', JSON.stringify(currentClient));
            alert('Du er blevet logget ud');
            window.location='../Startside.html'
        }
    }
}

//Gør det samme som den ovenover bare med konsulenter.
function ClogOff() {
    currentConsultant = JSON.parse(localStorage.getItem('consultants'));

    for (let i = 0; i < currentConsultant.length; i++) {
        if (currentConsultant[i].Online === true) {
            currentConsultant[i].Online = false;
            localStorage.setItem('consultants', JSON.stringify(currentConsultant));
            alert('Du er blevet logget ud');
            window.location='../Startside.html'
        }
    }
}