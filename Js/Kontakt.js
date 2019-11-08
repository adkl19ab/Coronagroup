
const beskeder = [];

function validateEmail(sEmail) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    if (!sEmail.match(reEmail)) {
        alert("Invalid email address");
        return false;
    }
    if (sEmail.match(reEmail)) {
            alert("Besked Sendt!");
            //ev.preventDefault(); //stopper form i at submit

            var afsenderInfo = {
                Navn: document.getElementById('mName').value,
                Email: document.getElementById('mEmail').value,
                Message: document.getElementById('mMessage').value
            };
            beskeder.push(afsenderInfo);
            document.forms[0].reset(); //sletter formen til næste entry

            // gem til local storage
            localStorage.setItem('Besked', JSON.stringify(beskeder));
        }
        return true;
    }
