
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Projekt2020'
});

class User {
    constructor(name, lastname, password, email, userType) {
        this.name = name;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
        this.userType = userType
    }

    addUser() {
        const queryString = "INSERT INTO users (name, lastname, password, Email, userType) VALUES (?, ?, ?, ?, ?)";

        connection.query(queryString, [this.name, this.lastname, this.password, this.email, this.userType], (err, results, fields) => {
            if (err) {
                console.log('Failed to create new user' + err);
                res.sendStatus(500);
            }
            console.log('Inserted a new user with id: ', results.insertId);
        })
    }

    displayUsername() {
        return console.log(this.name);
    }
}

class Consultant extends User{
    constructor(name, lastname, password, email, idSKILL) {
        super(name, lastname, password, email);
        this.idSKILL = idSKILL;
    }
    addConsultant(){
        const queryString = "INSERT INTO consultants (name, lastname, password, Email, idSKILL) VALUES (?, ?, ?, ?, ?)";

        connection.query(queryString, [this.name, this.lastname, this.password, this.email, this.idSKILL], (err, results, fields) => {
            if (err) {
                console.log('Failed to create new user' + err);
                res.sendStatus(500);
            }
            console.log('Inserted a new user with id: ', results.insertId);
        })
    }
}

class Admin extends User{
    constructor(name, lastname, password, email, usertype) {
        super(name, lastname, password, email, usertype);
    }
}


class Booking {
    constructor(consultantName, consultantEmail, dateOfAppointment, timeOfAppointment, clientName, clientPhone, clientEmail) {
        this.consultantName = consultantName;
        this.consultantEmail = consultantEmail;
        this.dateOfAppointment = dateOfAppointment;
        this.timeOfAppointment = timeOfAppointment;
        this.clientName = clientName;
        this.clientPhone = clientPhone;
        this.clientEmail = clientEmail;

    }

    addBooking() {
        const queryString = "INSERT INTO bookings (con_name, con_email, booking_time, booking_date, client_name, client_phone, client_email) VALUES (?, ?, ?, ?, ?, ?, ?)";

        connection.query(queryString, [this.consultantName, this.consultantEmail, this.timeOfAppointment, this.dateOfAppointment, this.clientName, this.clientPhone, this.clientName, this.clientEmail], (err, results, fields) => {
            if (err) {
                console.log('Failed to create new user' + err);
                res.sendStatus(500);
            }
            console.log('Inserted a new booking with id: ', results.insertId);
        })
        res.end()
    }
}



module.exports = {
    User : User,
    Consultant: Consultant,
    Admin: Admin,
    Booking: Booking
};
