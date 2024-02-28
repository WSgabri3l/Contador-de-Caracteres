const textarea = document.querySelector("#text");
const numberarea = document.querySelector("#counting");

//const buttonCount = document.querySelector("#count");
const buttonClean = document.querySelector("#clean");

textarea.addEventListener("input", (event) =>{

    let num_car = textarea.value.length;
    let limit = 100;
    limit = limit - num_car;
    numberarea.innerHTML = limit;

    if (limit == 0){

        numberarea.innerHTML = 0
        document.getElementById("allert").hidden = false;

    }else{

        document.getElementById("allert").hidden = true;

    };

});

buttonClean.addEventListener("click", (event) =>{

    textarea.value = ""
    numberarea.value = ""
    numberarea.innerHTML = 100
    document.getElementById("allert").hidden = true;

});
