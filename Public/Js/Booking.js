var table = document.getElementById('myTable');
var tbody = table.getElementsByTagName('tbody');

window.onload = function(){
    const form = document.getElementById('profileform');
    const name = document.getElementById('profilename');

    fetch('/Bookings').then(response => response.json()).then(json=> {
        debugger;
})
};

function appendData3(data){
    var mainContainer = document.getElementById("myData");
    var html = "";
    for (var i = 0; i < data.length; i++){
        var div = document.createElement("div");
        html += "<tr><td>" + data[i].ConsultantName + "</td><td>"+ data[i].ConsultantEmail + "</td><td>"+ data[i].Time + "</td><td>"+ data[i].Date + "</td><td>"+ data[i].Name + "</td><td>"+ data[i].Phone + "</td><td>"+ data[i].Email + "</td></tr>";
        mainContainer.appendChild(div);
    }

    for (i=0; i < mainContainer.length; i++ ){
        html += data[i].appendData();
    }
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

function filterBookings() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
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