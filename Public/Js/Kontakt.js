/* Mathias: Optimering af kode: I og med der laves et nyt tomt array hver gang, kunne man lave et for-loop med et if-else statement.
dette skulle hjælpe til at brugeren kunne sende mere end én besked uden den forrige bliver overskrevet.*/

let beskeder = [];

function validateEmail(sEmail) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if (!sEmail.match(reEmail)) {
        alert(" Ugyldig email");
        return false;
    }
    if (sEmail.match(reEmail)) {
            alert("Besked Sendt!");

            var afsenderInfo = {
                Navn: document.getElementById('mName').value,
                Email: document.getElementById('mEmail').value,
                Message: document.getElementById('mMessage').value
            };
            beskeder.push(afsenderInfo);
            document.forms[0].reset(); //Sletter formen når besked er sendt.

            // Gemmmer til local storage - under key'en "Besked"
            localStorage.setItem('Besked', JSON.stringify(beskeder));
        }
        return true;
    }
