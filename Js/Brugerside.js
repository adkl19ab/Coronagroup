currentClient = JSON.parse(localStorage.getItem('Brugere'));
currentAppointment = JSON.parse(localStorage.getItem('Appointments'));
var yikes = 20;

console.log(yikes);
function bruger() {

    for (let i = 0; i < currentClient.length; i++) {
        if (currentClient[i].Online === true) {
            var name = this.currentClient[i].clientName;
            var email = this.currentClient[i].clientEmail;
            document.getElementById("clientUsernameShow").innerHTML = (`Username: ${name}`);
            document.getElementById('clientEmailShow').innerHTML = (`e-mail: ${email}`)
        }
    }
}

// Caroline - Gøre så man kan se mere end en booking.
/*
Isak - Det vil være en god ide at tilføje mere funktionalitet til både booking-funktionen og viewAppointment.
Det er på nuværende tidspunkt ikke muligt at vise mere end én booking ad gangen på bookingsiden. Derudover vil vi gerne
tilføje mere samspil mellem consultant og appointment klassen, så at den henter navnet på konsulenten, samt kontaktinformation,
ud fra konsulentens attributter fra klassen.
*/

function viewAppointment(){

    if (currentAppointment === null) {
        localStorage.setItem('Appointments', JSON.stringify([]));
    }
    for (let j = 0; j < currentClient.length; j++) {
        if (currentClient[j].Online === true) {
            var date = this.currentAppointment[j].dateOfAppointment;
            var start = this.currentAppointment[j].startTimeOfAppointment;
            var end = this.currentAppointment[j].endTimeOfAppointment;
            var consultant = this.currentAppointment[j].nameOfConsultant;

            document.getElementById("Apptinfo").innerHTML = (`You have an appointment with ${consultant}, on ${date}. The appointment starts at ${start} and ends at ${end}`);
        }
    }
}
