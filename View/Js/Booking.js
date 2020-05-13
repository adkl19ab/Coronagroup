//Vi definerer vores table som variable. Vi kalder disse variable i Booking.html. Nedenstående er referancer til disse.
var table = document.getElementById('myTable');
var tbody = table.getElementsByTagName('tbody');

//Vi bruger window.onload funktionen til at fetche vores users fra vores database, som vi i client.js gennem en http.request har hentet til /bookings.
window.onload = function(){
    const form = document.getElementById('profileform');
    const name = document.getElementById('profilename');

    fetch('/Bookings').then(response => response.json()).then(json=> {
        debugger;
    })
};

//Nedenstående funktion bruger vi til at tage vores input og omdanne det fra JSON array til et HTML table.

function appendData3(data){
    //Vi kalder herunder vores ID, som vi har defineret i en Div i vores HTML.
    var mainContainer = document.getElementById("myData");
    //Vi opretter en tom string, og definerer den som HTML.
    var html = "";
    //Vi opstiller et for-loop, som looper gennem vores JSON data.
    for (var i = 0; i < data.length; i++){
        var div = document.createElement("div");
        //Vi definerer vores kolonner i HTML-tabellen, ud fra vores rows i databasen.
        html += "<tr><td>" + data[i].con_name + "</td><td>"+ data[i].con_email + "</td><td>"+ data[i].booking_starttime + "</td><td>"+ data[i].booking_endtime + "</td><td>"+ data[i].booking_date + "</td><td>"+ data[i].client_name + "</td><td>"+ data[i].client_phone + "</td><td>"+ data[i].client_email + "</td></tr>";
        mainContainer.appendChild(div);
    }
    for (i=0; i < mainContainer.length; i++ ){
        html += data[i].appendData();
    }
    //Vi bruger innerHTML, til at definere vores nu udfyldte string med vores data, til vores tbody. Denne variable hænger sammen med vores variabel øverst.
    tbody[0].innerHTML = html;
}

fetch('/Bookings').then(function(response){
})
    .catch(function(err){

    });
fetch('/Bookings')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        appendData3(data);
    })
    .catch(function(err){
        console.log(err);})

//Nedenstående funktion er vores filterfunktion. Vi går her ind og definerer vores input i tabellen, derefter looper vi igennem vores td-rows, i vores tbody.

function filterBookings() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    //I koden nedenfor, looper vi igennem alle felter i vores tabel, og fjerner alle de, som der ikke bliver søgt på.
    for (i = 0; i < tr.length; i++) {
        //Nedenfor definerer vi vores kolonne, som vi skal filtrere på.
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}