var currentClient = JSON.parse(localStorage.getItem('Brugere'));
var currentConsultant = JSON.parse(localStorage.getItem('consultants'));
let clients = [];
let consultants = [];


// Definerer vores klasser som bliver brugt til generering samt registrering af brugerne i vores system

class Consultant {
    constructor (consultantName, consultantPassword, skillTag, consultantEmail) {
        this.consultantName = consultantName;
        this.consultantPassword = consultantPassword;
        this.skillTag = skillTag;
        this.consultantEmail = consultantEmail;
}
    }

class Client {
    constructor (clientName, clientPassword, clientEmail) {
        this.clientName = clientName;
        this.clientPassword = clientPassword;
        this.clientEmail = clientEmail;

    }

    // tilføjer method som vi senere kalder i addUser funktionen
    promptAlert() {
        alert('Welcome ' + this.clientName + ', your account has been registered');
    }
}
// Funktion som tilføjer pre-set konsulenter til localstorage on-load

function generateConsultants() {
    consultants.push(new Consultant('consultant1','password1','HTML','test1@consultant.com'));
    consultants.push(new Consultant('consultant2','password2','CSS','test2@consultant.com'));
    consultants.push(new Consultant('consultant3','password3','Javascript','test3@consultant.com'));

    localStorage.setItem('consultants', JSON.stringify(consultants))
}

function addUser() {

    // Deklærer variable samt elementId i HTML dokument hvor informationen hentes fra.

    let clientName = document.getElementById('enteredName').value;
    let clientPassword = document.getElementById('enteredPass').value;
    let clientEmail = document.getElementById('enteredEmail').value;

    // Funktion som generer users baseret på tidligere beskrevet class og constructor

    let newClient = new Client(
        document.getElementById('enteredName').value,
        document.getElementById('enteredPass').value,
        document.getElementById('enteredEmail').value
    );

    newClient.promptAlert();

    // Log af newClient for kontrol
   console.log(newClient);

    // Pusher til vores Clients[] array
    clients.push(newClient);

    // Gemmer til local storage
    localStorage.setItem('Brugere', JSON.stringify(clients));

    // Endelig log for kontrol
    console.log(clients);
    console.log(consultants);

    // Resetter formen til registrering af næste bruger - ikke i brug lige nu, lader til,
    // at den indbyggede funktion i HTML button submit har samme funktion

    // document.forms[0].reset();
}

// Funktion som tjekker at den registrerede data er den samme som er indtastet i login-formen

function checkLogin() {

    // Entered data in the login form
    let enteredName = document.getElementById('enteredName1');
    let enteredPass = document.getElementById('enteredPass1');

    // Check if stored data from registration form is equal to entered data from login form

    for (let i = 0; i < currentClient.length; i++) {
        if (enteredName.value === currentClient[i].clientName && enteredPass.value === currentClient[i].clientPassword) {
            alert('Du er blevet logget ind.');
            window.location = 'Logget_ind/Brugerside.html';
            return
        }

        if (enteredName.value === currentConsultant[i].consultantName && enteredPass.value === currentConsultant[i].consultantPassword) {
            alert('Du er logget ind som konsulent');
            window.location = 'Logget_ind/Brugerside.html';
        }

        else {
            alert('Forkert Brugerinfo');
        }
    }
}



// Function to clear user from localStorage
/*function clearUsers() {
    localStorage.clear();
    alert('Users has been cleared from localStorage.');
}*/