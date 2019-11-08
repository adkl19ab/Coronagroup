function sendBesked(){
    alert("Besked Sendt!");
    //ev.preventDefault(); //stopper form i at submit

    var afsenderInfo = {
        Navn: document.getElementById('mName').value,
        Email: document.getElementById('mEmail').value,
        Message: document.getElementById('mMessage').value
    };
    users.push(user);
    document.forms[0].reset(); //sletter formen til næste entry

    // gem til local storage
    localStorage.setItem('Brugere', JSON.stringify(users));