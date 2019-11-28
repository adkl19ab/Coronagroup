function sendVidere() {
    currentClient = JSON.parse(localStorage.getItem('Brugere'));

    for (let i = 0; i < currentClient.length; i++) {
        if (currentClient[i].Online === true) {
            window.location='Logget_ind/Brugerside.html';
        }
    }
}
function bookAlert(){
    alert("Du bedes logge ind først")
}

