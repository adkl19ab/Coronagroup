var currentAppointments = JSON.parse(localStorage.getItem('appointments'));
var testAppointments = [];


class appointment {
    constructor (nameOfClient, nameOfConsultant, dateOfAppointment, startTimeOfAppointment, endTimeOfAppointment){
        this.nameOfClient = nameOfClient;
        this.nameOfConsultant = nameOfConsultant;
        this.dateOfAppointment = dateOfAppointment;
        this.startTimeOfAppointment = startTimeOfAppointment;
        this.endTimeOfAppointment = endTimeOfAppointment;
    }
}

function generateAppointmentsTest() {

    testAppointments.push(new appointment('test1', 'test1', '11/11/2019', '01:00', '02:00'));
    testAppointments.push(new appointment('test2', 'test2', '22/22/2019', '02:00', '03:00'));
    testAppointments.push(new appointment('test3', 'test3', '33/33/2019', '03:00', '04:00'));

    localStorage.setItem('appointments', JSON.stringify(testAppointments));

}