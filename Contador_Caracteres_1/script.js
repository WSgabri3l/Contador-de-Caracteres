const textarea = document.querySelector("#text");
const numberarea = document.querySelector("#counting");

const buttonCount = document.querySelector("#count");
const buttonClean = document.querySelector("#clean");

buttonCount.addEventListener("click", (event) =>{
    
    let num_car = textarea.value;

    numberarea.value = num_car.length;
});

buttonClean.addEventListener("click", (event) =>{

    textarea.value = ""
    numberarea.value = ""
});