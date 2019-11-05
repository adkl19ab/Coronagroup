var currentuser = JSON.parse(localStorage.getItem('Brugere')); //NYT!
let users = [];
let consultants = [];

class Consultant {
    constructor (name, consultantPassword, skilltag, email) {
        this.name = name;
        this.consultantPassword = consultantPassword;
        this.skilltag = skilltag;
        this.email = email;
    }
}

function generateConsultants() {
    consultants.push(new Consultant('consultant1','password1','HTML','test1@consultant.com'));
    consultants.push(new Consultant('consultant2','password2','CSS','test2@consultant.com'));
    consultants.push(new Consultant('consultant3','password3','Javascript','test3@consultant.com'));

    localStorage.setItem('consultants', JSON.stringify(consultants))
}


function addUser(){
    alert("Bruger oprettet");
    //ev.preventDefault(); //stopper form i at submit

    var user = {
        username: document.getElementById('enteredName').value,
        password: document.getElementById('enteredPass').value,
        email: document.getElementById('enteredEmail').value
    };
    users.push(user);
    document.forms[0].reset(); //sletter formen til næste entry

    // gem til local storage
    localStorage.setItem('Brugere', JSON.stringify(users));
}

// Function to check if the stored data from the registration form is equal to the entered data in the login form
function checkLogin() {

    // Entered data in the login form
    var enteredName = document.getElementById('enteredName1');
    var enteredPass = document.getElementById('enteredPass1');

    // Check if stored data from registration form is equal to entered data from login form
    for (let i = 0; i < currentuser.length; i++) {
        if (enteredName.value == currentuser[i].username && enteredPass.value == currentuser[i].password ) {
            alert('Du er blevet logget ind.');
            window.location='Logget_ind/Brugerside.html';}
        if (enteredName.value !== currentuser[i].username && enteredPass.value !== currentuser[i].password ) {
            alert('Forkert Brugerinfo.');}
        }
    }



// Function to clear user from localStorage
/*function clearUsers() {
    localStorage.clear();
    alert('Users has been cleared from localStorage.');
}*/