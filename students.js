
var students_list = JSON.parse(localStorage.getItem("local"));

students_list.map(function(elem,i){
    
    let row = document.createElement("tr");

    let col1 = document.createElement("td")
    col1.innerText= elem.name;

    let col2 = document.createElement("td")
    col2.innerText= elem.phone;

    let col3 = document.createElement("td")
    col3.innerText= elem.city;

    row.append(col1,col2,col3);

    document.querySelector("tbody").append(row)
})