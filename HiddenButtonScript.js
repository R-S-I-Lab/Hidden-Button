const elements = document.body.getElementsByClassName("btn btn-outline-primary");
const index = Math.floor(Math.random() * elements.length);
const randomElement = elements[index];

function checkWinner(button) {
    if (button.id === randomElement.id) {
        button.innerHTML = "Winner";
        button.className = "btn btn-success";
    } else {
        button.innerHTML = "Try Again";
        button.className = "btn btn-danger";
    }
}
