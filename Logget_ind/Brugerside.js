
function bruger() {
    currentClient = JSON.parse(localStorage.getItem('Brugere'));

    for (let i = 0; i < currentClient.length; i++) {
        if (currentClient[i].Online === true) {
            var name = this.currentClient[i].clientName
            var email = this.currentClient[i].clientEmail
            document.getElementById("Brugerinfo").innerHTML= [name, email];
        }}}
function viewAppt(){

}