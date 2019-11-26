let appointments = [];
let testest = [];



class appointment {
    constructor (nameOfClient, nameOfConsultant, dateOfAppointment, startTimeOfAppointment, endTimeOfAppointment){
        this.nameOfClient = nameOfClient;
        this.nameOfConsultant = nameOfConsultant;
        this.dateOfAppointment = dateOfAppointment;
        this.startTimeOfAppointment = startTimeOfAppointment;
        this.endTimeOfAppointment = endTimeOfAppointment;
    }
}

currentClient = JSON.parse(localStorage.getItem('Brugere'));


function book() {
    for (let i = 0; i < currentClient.length; i++) {
        if (currentClient[i].Online === true) {
           this.currentClient[i].name = currentClient[i].clientName;
            appointments.push(new appointment(currentClient[i].name,"","","",""));
            localStorage.setItem('Appointment', JSON.stringify(appointments));
            alert('Aftale oprettet');
        }
    }

}
function testBooking() {
    var testTid = document.getElementById('apptTime').value;

    appointments.push(testTid);

}
