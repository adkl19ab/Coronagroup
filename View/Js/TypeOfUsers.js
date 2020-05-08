//Vi definerer vores table som variable. Vi kalder disse variable i Booking.html. Nedenstående er referancer til disse.
var table = document.getElementById('myTable');
var tbody = table.getElementsByTagName('tbody');

//Vi bruger window.onload funktionen til at fetche vores users fra vores database, som vi i client.js gennem en http.request har hentet til /bookings.
window.onload = function(){
    const form = document.getElementById('profileform');
    const name = document.getElementById('profilename');

    fetch('/usertype').then(response => response.json()).then(json=> {
        debugger;
})
};

//Nedenstående funktion bruger vi til at tage vores input og omdanne det fra JSON array til et HTML table.

function appendData(data) {
    //Vi kalder herunder vores ID, som vi har defineret i en Div i vores HTML.
    var mainContainer = document.getElementById("myData");
    //Vi opretter en tom string, og definerer den som HTML.
    var html = "";
    //Vi opstiller et for-loop, som looper gennem vores JSON data.
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        //Vi definerer vores kolonner i HTML-tabellen, ud fra vores rows i databasen.
        html += "<tr><td>" + data[i].idUserType + "</td><td>" + data[i].userType + "</td></tr>";
        mainContainer.appendChild(div);
    }

    for (i = 0; i < mainContainer.length; i++) {
        html += data[i].appendData();
    }
    //Vi bruger innerHTML, til at definere vores nu udfyldte string med vores data, til vores tbody. Denne variable hænger sammen med vores variabel øverst.
    tbody[0].innerHTML = html;
}

fetch('/usertype').then(function(response){
})
    .catch(function(err){

    });
fetch('/usertype')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        appendData(data);
    })
    .catch(function(err){
        console.log(err);})
