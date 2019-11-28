var currentClient = JSON.parse(localStorage.getItem('Brugere'));
let appointments = [];


// Definerer vores klasse appointment, som vi senere gør brug af i vores addBooking funktion
class appointment {
    constructor(nameOfClient, nameOfConsultant, dateOfAppointment, startTimeOfAppointment, endTimeOfAppointment) {
        this.nameOfClient = nameOfClient;
        this.nameOfConsultant = nameOfConsultant;
        this.dateOfAppointment = dateOfAppointment;
        this.startTimeOfAppointment = startTimeOfAppointment;
        this.endTimeOfAppointment = endTimeOfAppointment;
    }
    // Tilføjer Method som vi senere kalder i addBooking funktionen
    promptAlertBooking() {
        alert(`Thank you ${this.nameOfClient}, your booking with ${this.nameOfConsultant} on ${this.dateOfAppointment} has been registered`);
    }
}


function addBooking() {
    // For loot som tjekker hvilke brugere der er online, og derefter henter currentClient[i] username fra localstorage.
    for (let i = 0; i < currentClient.length; i++) {
        if (currentClient[i].Online === true) {
           this.currentClient[i].name = currentClient[i].clientName;
           let newAppointment = new appointment(
               currentClient[i].name,
               "",
               document.getElementById('apptDate').value,
               document.getElementById('apptTimeStart').value,
               document.getElementById('apptTimeEnd').value);

            appointments.push(newAppointment);
            localStorage.setItem('Appointment', JSON.stringify(appointments));
            newAppointment.promptAlertBooking();
        }
    }
}
