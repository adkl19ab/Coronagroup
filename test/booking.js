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

function testBooking() {
    var testTid = document.getElementById('apptTime').value;

    appointments.push(testTid);

}
