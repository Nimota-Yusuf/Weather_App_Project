function city(event){
    event.preventDefault();
    let form_input = document.querySelector("#form-input");
    let h1Element = document.querySelector ('h1');
    h1Element.innerHTML = form_input.value
}

let searchElement = document.querySelector("form");
searchElement.addEventListener('submit', city)