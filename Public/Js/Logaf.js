// log af funktion som først henter information i localstorage
// derefter kører den et loop igennem som tjekker efter brugere med en property med navnet Online og værdien true.
// hvis den så findes ændres den til false og brugeren bliver sendt tilbage til startsiden.
function logOff() {
    currentClient = JSON.parse(localStorage.getItem('Brugere'));

    for (let i = 0; i < currentClient.length; i++) {
        if (currentClient[i].Online === true) {
            currentClient[i].Online = false;
            localStorage.setItem('Brugere', JSON.stringify(currentClient));
            alert('Du er blevet logget ud');
            window.location='../Ikke_logget_ind/Startside.html'
        }
    }
}

//Gør det samme som den ovenover bare med konsulenter.
function ClogOff() {
    currentConsultant = JSON.parse(localStorage.getItem('consultants'));

    for (let i = 0; i < currentConsultant.length; i++) {
        if (currentConsultant[i].Online === true) {
            currentConsultant[i].Online = false;
            localStorage.setItem('consultants', JSON.stringify(currentConsultant));
            alert('Du er blevet logget ud');
            window.location='../Ikke_logget_ind/Startside.html'
        }
    }
}



class User {
    constructor(name, password, userType, idSKILL, email) {
        this.name = name;
        this.password = password;
        this.userType = userType;
        this.idSKILL = idSKILL;
        this.email = email;
    }

    addToTable() {
        const queryString = "INSERT INTO users (name, password, userType, idSKILL, Email) VALUES (?, ?, ?, ?, ?)";

        connection.query(queryString, [this.name, this.password, this.userType, this.idSKILL, this.email], (err, results, fields) => {
                if (err) {
                    console.log('Failed to create new user' + err);
                    //res.sendStatus(500);
                }
                console.log('Inserted a new user with id: ', results.insertId);
                //res.end()
            }
        )
    }
    displayUsername(){
        return console.log(this.name);
    }
}

router.post('/client_create', (req, res) => {
    console.log('Trying to create a new user');

    let dummy = new User(
        req.body.client_name,
        req.body.client_password,
        req.body.client_userType,
        req.body.client_idSKILL,
        req.body.client_Email
    )

    console.log(dummy);
    dummy.displayUsername();
    dummy.addToTable();
    res.end()
})