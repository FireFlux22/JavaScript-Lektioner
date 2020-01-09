
// I index.html ligger det en struktur för att skapa tabbar. 
// Lägg på JS som döljer alla tabs-single-content divar som inte ska visas. 
// Varje .tabs-selector är matchad med en .tabs-single-content med hjälp 
// av data-tab och data-tabid. När vi trycker på en .tabs-selector ska dessa 
// matchande .tabs-single-content visas. .tabs-selectorn ska också få 
// classen .selected och vara ensam om att ha den.


displayNone();

document.querySelector("[data-tab='info']").addEventListener("click", onClick);

document.querySelector("[data-tab='about']").addEventListener("click", onClick);

document.querySelector("[data-tab='contact']").addEventListener("click", onClick);

function displayNone() {
    const singleTabs = document.querySelectorAll(".tabs-single-content");

    for (let i = 0; i < singleTabs.length; i++) {
        singleTabs[i].style.display = "none";
    }
}

function removeSelected() {
    const allTabs = document.querySelectorAll(".tabs-selector");

    for (let i = 0; i < allTabs.length; i++) {
        allTabs[i].classList.remove("selected");   
    }
}

function onClick(e) {
    
    displayNone();
    removeSelected();

    const tabSelector = document.querySelector("[data-tab='" + this.dataset.tab + "']");
    const idSelector = document.querySelector("[data-tabid='" + this.dataset.tab + "']");

    idSelector.style.display = "block";

    tabSelector.classList.add("selected");
}

// document.querySelector("[data-tabid='info']")
// <div class=​"tabs-single-content" data-tabid=​"info">​This is some info, first tab​</div>​
// temp1.getAttribute("data-tab")
// temp1.dataset.tab
// "info"
// temp1
// <div class=​"tabs-selector" data-tab=​"info">​Info​</div>​
