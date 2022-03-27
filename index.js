
document.querySelector("form").addEventListener("submit", formSubmit);

var students_list =JSON.parse(localStorage.getItem("local")) || [];

function formSubmit(event){
    event.preventDefault()

    let students = {
        name: document.querySelector("#name").value,
        phone: document.querySelector("#phone").value,
        city: document.querySelector("#city").value,
    }

    // console.log(students)

    students_list.push(students)

    console.log(students_list)

    localStorage.setItem("local",JSON.stringify(students_list))


}