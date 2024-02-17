function city(event){
    event.preventDefault();
    let form_input = document.querySelector("#form-input");
    searchCity(form_input.value);
}
let searchElement = document.querySelector("form");
searchElement.addEventListener('submit', city);

function searchCity(city){
    let apiKey = "f8f60a003btf3df78oa2b71e8949ee2f";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
    axios.get(apiURL).then(display_temperature);
}

function display_temperature(response){
   let temperature = response.data.temperature.current;
   let temperature_result = document.querySelector('#temperature');
   temperature_result.innerHTML = Math.round(temperature);
   
   let h1Element = document.querySelector("h1");
   h1Element.innerHTML = response.data.city;
}
