var table = document.getElementById('myTable');
var tbody = table.getElementsByTagName('tbody');



window.onload = function(){
    const form = document.getElementById('profileform');
    const name = document.getElementById('profilename');

    fetch('/usertype').then(response => response.json()).then(json=> {
        debugger;
})
};

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    var html = "";
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        html += "<tr><td>" + data[i].idUserType + "</td><td>" + data[i].userType + "</td></tr>";
        mainContainer.appendChild(div);
    }

    for (i = 0; i < mainContainer.length; i++) {
        html += data[i].appendData();
    }

// The table body will contain the string "html" which contains a string similar to this: ""<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>"...."
// the table can read the string properly and inserts everything correctly
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
