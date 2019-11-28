currentClient = JSON.parse(localStorage.getItem('Brugere'));
currentAppointment = JSON.parse(localStorage.getItem('Appointments'));

function bruger() {

    for (let i = 0; i < currentClient.length; i++) {
        if (currentClient[i].Online === true) {
            var name = this.currentClient[i].clientName;
            var email = this.currentClient[i].clientEmail;
            document.getElementById("Brugerinfo").innerHTML= [name, email];
        }
    }
}

//var testArr = ['test'];

function viewAppointment(){

    for (let j = 0; j < currentClient.length; j++) {
        if (currentClient[j].Online === true) {
            var date = this.currentAppointment[j].dateOfAppointment;
            var start = this.currentAppointment[j].startTimeOfAppointment;
            var end = this.currentAppointment[j].endTimeOfAppointment;
            var consultant = this.currentAppointment[j].nameOfConsultant;

            document.getElementById("Apptinfo").innerHTML = [consultant, date, start, end];
        }
    }
}
