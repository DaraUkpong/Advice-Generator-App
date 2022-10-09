//  Variables

const url = "https://api.adviceslip.com/advice";
const adviceId = document.getElementById("adviceNumber");
const adviceLine = document.getElementById("adviceText");

// An advice loads on first visit
window.onload = getAdvice;

//  Function that calls the API
function getAdvice() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => data.slip)
        .then((data) => {
            adviceLine.textContent = data.advice;
            adviceId.textContent = data.id;
        });
}