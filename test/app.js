var currentClient = JSON.parse(localStorage.getItem('Brugere'));
var currentConsultant = JSON.parse(localStorage.getItem('consultants'));
let clients = [];
let consultants = [];

// Vigtig!
//Hurtig løsning - tjekker om der er en key der hedder Brugere hvis ikke der er så laver den en med et tomt array.
let clientTom = localStorage.getItem("Brugere");
if (clientTom == null) {
    localStorage.setItem('Brugere', JSON.stringify([]));
}

// Definerer vores klasser som bliver brugt til generering samt registrering af brugerne i vores system
class Consultant {
    constructor (consultantName, consultantPassword, skillTag, consultantEmail, Online) {
        this.consultantName = consultantName;
        this.consultantPassword = consultantPassword;
        this.skillTag = skillTag;
        this.consultantEmail = consultantEmail;
        this.Online = false;
}
    }

class Client {
    constructor (clientName, clientPassword, clientEmail, Online) {
        this.clientName = clientName;
        this.clientPassword = clientPassword;
        this.clientEmail = clientEmail;
        this.Online = false;
    }

    // tilføjer method som vi senere kalder i addUser funktionen - gør brug af string interpolation
    promptAlert() {
        alert(`Welcome ${this.clientName}, your account has been registered`);
    }
}


// Tilføjer pre-set konsulenter til localstorage on-load
    //Front-end konsulenter
    consultants.push(new Consultant('Mohammed Ali','FEpassword1','Front-end','FE1@ccc.com'));
    consultants.push(new Consultant('Mikkel Ditlev','FEpassword2','Front-end','FE2@ccc.com'));
    consultants.push(new Consultant('Lene Ipsen','FEpassword3','Front-end','FE3@ccc.com'));

    //Back-end konsulenter
    consultants.push(new Consultant('Helle Nikolajsen','BEpassword1','Back-end','BE1@ccc.com'));
    consultants.push(new Consultant('Bettina Gorborger','BEpassword2','Back-end','BE2@ccc.com'));
    consultants.push(new Consultant('Oliver Borkov','BEpassword3','Back-end','BE3@ccc.com'));


    //IT-rådgivning konsulenter
    consultants.push(new Consultant('Ib Christiansen','ITRpassword1','IT-Rådgivning','ITR1@ccc.com'));
    consultants.push(new Consultant('Fahad Nikolajsen','ITRpassword2','IT-Rådgivning','ITR2@ccc.com'));

    //IT-Support konsulenter
    consultants.push(new Consultant('Patrick Borkov','ITSpassword1','IT-Support','ITS1@ccc.com'));
    consultants.push(new Consultant('Isak Hansen','ITSpassword2','IT-Support','ITS2@ccc.com'));

    localStorage.setItem('consultants', JSON.stringify(consultants));

function addUser() {
    let enteredName = document.getElementById('enteredName');
    let enteredPass = document.getElementById('enteredPass');
    let enteredEmail = document.getElementById('enteredEmail');

    // Disse 3 if statements tjekker om oplysninger angivet stemmer overens med rettingslinjer.
    if (enteredName.value.length >= 5) {
        var godtNavn = true;
    } else alert('Brugernavn skal minimum være 8 cifre langt!');
    if (enteredPass.value.length >= 8) {
        var godtPass = true;
    } else alert('Password skal minimum være 8 cifre langt!');
    if (enteredEmail.value.match("@.")) {
        var godEmail = true;
    } else alert("Email er ikke korrekt angivet!");
    if (godtNavn === true && godtPass === true && godEmail === true) {
        let newClient = new Client(
            document.getElementById('enteredName').value,
            document.getElementById('enteredPass').value,
            document.getElementById('enteredEmail').value
        );
        newClient.promptAlert();
        // Log af newClient for kontrol
        //console.log(newClient);
        // Henter de brugere der findes i key
        clients = JSON.parse(localStorage.getItem('Brugere'));
        // Pusher til vores Clients[] array
        clients.push(newClient);
        // Gemmer til local storage
        localStorage.setItem('Brugere', JSON.stringify(clients));
        // Endelig log for kontrol
        /*console.log(clients);
        console.log(consultants);*/
        // Refresher siden ellers bliver seneste entry ikke pushet ind alle steder.
        window.location = 'Startside.html';
    }
}


// Funktion som tjekker at den registrerede data er den samme som er indtastet i login-formen
function checkLogin() {
// Variabler som er sat til false. Bruges senere til at nægte adgang hvis information er forkert.
    let godkendtID = false;
    let godkendtCID = false;

    // Entered data in the login form
    let enteredName = document.getElementById('enteredName1');
    let enteredPass = document.getElementById('enteredPass1');

    // Funktion som tjekker om det er en Client der logger ind og sætter godkendtID til true hvis det er.
    for (let i = 0; i < currentClient.length; i++) {
        if (enteredName.value === currentClient[i].clientName && enteredPass.value === currentClient[i].clientPassword) {
            currentClient[i].Online = true;
            godkendtID = true;
        }
    }


    // Funktion som tjekker om det er en Konsulent der logger ind og sætter godkendtCID til true hvis det er.
    for (let i = 0; i < currentConsultant.length; i++) {
        if (enteredName.value === currentConsultant[i].consultantName && enteredPass.value === currentConsultant[i].consultantPassword) {
            currentConsultant[i].Online = true;
            godkendtCID = true;
        }
    }

    // if statement som advarer hvis brugerinfo er forkert.
    if (godkendtID === false && godkendtCID === false) {
        alert('Forkert Brugerinfo!');
    }
    // if statement som gør brug af vores false variabler, sætter deres Online til true i localstorage
    // og dirigerer videre hvis enten klientinfo eller konsulentens info er korrekt
    if (godkendtID === true || godkendtCID === true) {
        alert('Du er blevet logget ind!');
        localStorage.setItem('Brugere', JSON.stringify(currentClient));
        localStorage.setItem('consultants', JSON.stringify(currentConsultant));
        window.location = 'Logget_ind/Brugerside.html';
    }
}

// Function som gør at kan logge ind ved at trykke Enter på password input.
// Hentet fra w3school og modificeret til vores behov
// Get the input field

let input = document.getElementById("enteredPass1");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("login_btn").click();
    }
});