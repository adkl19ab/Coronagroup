var table = document.getElementById('myTable');
var tbody = table.getElementsByTagName('tbody');



window.onload = function(){
    const form = document.getElementById('profileform');
    const name = document.getElementById('profilename');

    fetch('/skills').then(response => response.json()).then(json=> {
        debugger;
})
};

function appendData2(data) {
    var mainContainer = document.getElementById("myData");
    var html = "";
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        html += "<tr><td>" + data[i].idSKILL + "</td><td>" + data[i].skill + "</td></tr>";
        mainContainer.appendChild(div);
    }

    for (i = 0; i < mainContainer.length; i++) {
        html += data[i].appendData();
    }

// The table body will contain the string "html" which contains a string similar to this: ""<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>"...."
// the table can read the string properly and inserts everything correctly
    tbody[0].innerHTML = html;
}

fetch('/skills').then(function(response){
})
    .catch(function(err){

    });
fetch('/skills')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        appendData2(data);
    })
    .catch(function(err){
        console.log(err);})