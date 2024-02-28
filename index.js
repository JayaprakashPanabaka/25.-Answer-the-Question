let questionFormEl = document.getElementById("questionForm");

let cityHyd = document.getElementById("cityHyd");
let cityChennai = document.getElementById("cityChennai");
let cityDelhi = document.getElementById("cityDelhi");
let cityMumbai = document.getElementById("cityMumbai");

let resultMsg = document.getElementById("resultMsg");

let capitalCity = "Delhi";
let selectedCity = null;


cityHyd.addEventListener("change", (event) => {
    selectedCity = event.target.value;
});

cityChennai.addEventListener("change", (event) => {
    selectedCity = event.target.value;
});

cityDelhi.addEventListener("change", (event) => {
    selectedCity = event.target.value;
});

cityMumbai.addEventListener("change", (event) => {
    selectedCity = event.target.value;
});


questionFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    if(selectedCity === capitalCity) {
        resultMsg.textContent = 'Correct Answer';
        resultMsg.style.color = "#2b9a40";
    }else if(selectedCity === null) {
        resultMsg.textContent = "Please select the city";
        resultMsg.style.color = "#dc3545";
    }else {
        resultMsg.textContent = "Wrong Answer";
        resultMsg.style.color = "#dc3545";
    }
})













