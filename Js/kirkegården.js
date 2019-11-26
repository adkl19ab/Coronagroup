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
}
users.push(user);

