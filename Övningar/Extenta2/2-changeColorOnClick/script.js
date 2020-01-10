/* Implement your solution here */

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", onClick);
}

function onClick() {
    const headerEl = document.querySelector("h1");

    headerEl.textContent = this.classList.value;
    headerEl.style.color = this.classList.value;
    
    document.querySelector(".container").prepend(headerEl);
}
