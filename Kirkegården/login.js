var allUsers = [];
var userid = 0;


class client {
    constructor(username, name, password, email, company, address, usertype) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.company = company;
        this.address = address;
        this.usertype = usertype;
    }
}
document.getElementById("registerButton").onclick = function() {
    var newUsername = document.getElementById("username").value;
    var newPassword = document.getElementById("password").value;
    var newEmail = document.getElementById("email").value;
    var newCompany = document.getElementById("company").value;
    var newAddress = document.getElementById("address").value;
    var newUsertype = document.getElementById("usertype").value;
    allUsers.push({username: newUsername, password: newPassword, email: newEmail, company: newCompany,
    address: newAddress, usertype: newUsertype})
}
}























/*

// Store input from registration form in localStorage
function storeLogin() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('email'), email.value;
    alert('New user has been created.');
}

// Function to list user in localStorage
function showUser() {
    console.log('Show user stored in localStorage.')
    console.log(localStorage);
}

// Function to check if the stored data from the registration form is equal to the entered data in the login form
function checkLogin() {

    // Stored data from the registration form
    var storedName = localStorage.getItem('username');
    var storedPass = localStorage.getItem('password');
    var storedEmail = localStorage.getItem('email')


    // Entered data in the login form
    var enteredName = document.getElementById('enteredName');
    var enteredPass = document.getElementById('enteredPass');

    // Check if stored data from registration form is equal to entered data from login form
    if(enteredName.value == storedName && enteredPass.value == storedPass) {
        alert('You are logged in.');
    }else {
        alert('Error. Wrong login.');
    }
}

// Function to clear user from localStorage
function clearUser() {
    localStorage.clear();
    alert('User has been cleared from localStorage.');
}


 */