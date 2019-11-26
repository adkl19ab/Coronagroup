// Hele dette dokument er blot et dummy dokument, som der kan bruges mens der laves brugerinfo side eller booking display


// currentAppointments kan bruges, hvis der senere skal tjekkes arrays igennem eller lign.
var currentAppointments = JSON.parse(localStorage.getItem('testAppointments'));

//Tomt arrray som indeholder appointments, bliver senere pushed til local storage.
var testAppointments = [];


//Vores constructor class som definerer hvad en appointment indeholder.
//Denne kan  i sagtens ændre i, hvis I bare lige skriver og hører. Skal nemlig koordineres med vores bookingsystem.

class appointment {
    constructor (nameOfClient, nameOfConsultant, dateOfAppointment, startTimeOfAppointment, endTimeOfAppointment){
        this.nameOfClient = nameOfClient;
        this.nameOfConsultant = nameOfConsultant;
        this.dateOfAppointment = dateOfAppointment;
        this.startTimeOfAppointment = startTimeOfAppointment;
        this.endTimeOfAppointment = endTimeOfAppointment;
    }
}

//Dummy funktion som generer pre-set appointments baseret på vores constructor.
//Kommer senere til at hente information fra vores booking-form på siden.

function generateAppointmentsTest() {

    testAppointments.push(new appointment('test1', 'test1', '11/11/2019', '01:00', '02:00'));
    testAppointments.push(new appointment('test2', 'test2', '22/22/2019', '02:00', '03:00'));
    testAppointments.push(new appointment('test3', 'test3', '33/33/2019', '03:00', '04:00'));

    localStorage.setItem('testAppointments', JSON.stringify(testAppointments));

}
function testAlarm(){
    alert('Ikke tryk her')
}