// Forsøg på ny client

    new Client(
        document.getElementById('enteredName').value,
        document.getElementById('enteredPassword').value,
        document.getElementById('enteredEmail').value
    );

// Gammel addUser()

var user = {
    username: document.getElementById('enteredName').value,
    password: document.getElementById('enteredPass').value,
    email: document.getElementById('enteredEmail').value
};
users.push(user);


//Funktion hentet fra Stackoverflow som vi forsøgte at bruge til at sætte en min-date på vores kalender.
// https://stackoverflow.com/questions/17316540/make-some-options-in-a-select-menu-unselectable

function minDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("apptTimeStart").setAttribute("max", today);
}

// Deklærer variable samt elementId i HTML dokument hvor informationen hentes fra - Lader ikke til at være nødvendigt for nu
// Lader det dog være.
/* let clientName = document.getElementById('enteredName').value;
 let clientPassword = document.getElementById('enteredPass').value;
 let clientEmail = document.getElementById('enteredEmail').value;*/

// Resetter formen til registrering af næste bruger - ikke i brug lige nu.
// Lader til at den indbyggede funktion i HTML button submit har samme funktion

// document.forms[0].reset();