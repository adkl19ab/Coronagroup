/*eslint no-undef: "error"*/
/*eslint-env node*/
var table = document.getElementById('myTable');
var tbody = table.getElementsByTagName('tbody');
filterSelection("all"); // Viser alle konsulenter når siden bliver loadet.
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv"); // x bliver sat til filterdiv som er id'et på alle konsulenter.
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}
window.onload = function(){
    const form = document.getElementById('profileform');
    const name = document.getElementById('profilename');

    fetch('/users').then(response => response.json()).then(json=> {
        debugger;
})
};

function appendData(data){
    var mainContainer = document.getElementById("myData");
    var html = "";
    for (var i = 0; i < data.length; i++){
        var div = document.createElement("div");
       html += "<tr><td>"+ data[i].name + "</td><td>" + data[i].password + "</td><td>" + data[i].idSKILL + "</td></tr>";
        mainContainer.appendChild(div);
    }

for(i=0; i < mainContainer.length; i++ ){
    html += data[i].appendData();
}

// The table body will contain the string "html" which contains a string similar to this: ""<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>"...."
// the table can read the string properly and inserts everything correctly
tbody[0].innerHTML = html;

}
fetch('/users').then(function(response){
})
    .catch(function(err){

    });
fetch('/users')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
    appendData(data);
})
.catch(function(err){
    console.log(err);
});
// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
