// Selectors
let modal = document.getElementById("simpleModal");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

// Listeners
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);



// Functions: Open and Close the Modal
function openModal(){
    console.log("Open Modal");
    modal.style.display = "block";
}

function closeModal(){
    console.log("Close Modal");
    modal.style.display = "none";
}

function outsideClick(e){
    console.log("Outside Click");
    if (e.target == modal){
        closeModal();
    }
}






