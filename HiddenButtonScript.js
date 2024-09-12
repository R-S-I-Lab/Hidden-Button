let elements = document.body.getElementsByClassName("btn btn-outline-primary");
let index = Math.floor(Math.random() * (0 - elements.length)) + elements.length;
let randomElement = elements[index];

function checkWinner(button) {
    if (button.id === randomElement.id) {
        button.innerHTML = "Winner";
        button.className = "btn btn-success";
    } else {
        button.innerHTML = "Try Again";
        button.className = "btn btn-danger";
    }
}