var currentuser = JSON.parse(localStorage.getItem('Brugere')); //NYT!
let users = [];
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

    // kun for at vise
    console.warn('Bruger oprettet', {users});
    /*let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(users,'\t', 2);*/

    // gem til local storage
    localStorage.setItem('Brugere', JSON.stringify(users));
};


/*document.addEventListener('DOMContentLoaded', ()=>{
   // document.getElementById('btn').addEventListener('click', addUser);
});

 */
// Function to check if the stored data from the registration form is equal to the entered data in the login form
function checkLogin() {

    // Stored data from the registration form
    //adminName = 'admin';
    //adminPass = 'admin';


    // Entered data in the login form
    var enteredName = document.getElementById('enteredName1');
    var enteredPass = document.getElementById('enteredPass1');

    // Check if stored data from registration form is equal to entered data from login form
    for (let i = 0; i < currentuser.length; i++) {
        if (enteredName.value == currentuser[i].username && enteredPass.value == currentuser[i].password ) {
            alert('You are logged in.');}
        }
/*else {
        alert('Error. Wrong login.');
    }*/
    }
// Function to clear user from localStorage
/*function clearUsers() {
    localStorage.clear();
    alert('Users has been cleared from localStorage.');
}*/