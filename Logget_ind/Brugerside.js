
function bruger() {
    currentClient = JSON.parse(localStorage.getItem('Brugere'));

    for (let i = 0; i < currentClient.length; i++) {
        if (currentClient[i].Online === true) {
            var name = this.currentClient[i].clientName;
            var email = this.currentClient[i].clientEmail;
            document.getElementById("Brugerinfo").innerHTML= [name, email];
        }
    }
}


function viewAppt() {
    currentClient = JSON.parse(localStorage.getItem('Appointment'));
    for (let i = 0; i < currentClient.length; i++) {
        if (currentClient[i].Online === true) {
            var date = this.appointments[i].dateOfAppointment;
            var start = this.appointments[i].startTimeOfAppointment;
            var end = this.appointments[i].endTimeOfAppointment;
            var consultant = this.appointments[i].nameOfConsultant;
            document.getElementById("Apptinfo").innerHTML = [consultant, date, start, end];


        }
    }
}
