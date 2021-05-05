const infoBtn = document.querySelector("#infoBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const workBtn = document.querySelector("#workBtn");
const contactBtn = document.querySelector("#contactBtn");
const infoSection = document.querySelector("#infoSection");
const aboutSection = document.querySelector("#aboutSection");
const workSection = document.querySelector("#workSection")
const contactSection = document.querySelector("#contactSection");


aboutBtn.addEventListener("click", function() {
    aboutSection.style.display = "flex";
    aboutBtn.lastChild.style.display = "block";
    infoSection.style.display = "none";
    infoBtn.lastChild.style.display = "none"
    workSection.style.display = "none";
    workBtn.lastChild.style.display = "none";
    contactSection.style.display = "none";

    aboutBtn.classList.add("linkActive");
    infoBtn.classList.remove("linkActive");
    workBtn.classList.remove("linkActive");
}) 

infoBtn.addEventListener("click", function() {
    infoSection.style.display = "flex";
    infoBtn.lastChild.style.display = "block"
    aboutSection.style.display = "none"
    aboutBtn.lastChild.style.display = "none";
    workSection.style.display = "none";
    workBtn.lastChild.style.display = "none";
    contactSection.style.display = "none";

    infoBtn.classList.add("linkActive");
    aboutBtn.classList.remove("linkActive");
    workBtn.classList.remove("linkActive");
})

workBtn.addEventListener("click", function() {
    workSection.style.display = "flex";
    workBtn.lastChild.style.display = "block";
    aboutSection.style.display = "none";
    aboutBtn.lastChild.style.display = "none";
    infoSection.style.display = "none";
    infoBtn.lastChild.style.display = "none"
    contactSection.style.display = "none";

    workBtn.classList.add("linkActive");
    infoBtn.classList.remove("linkActive");
    aboutBtn.classList.remove("linkActive");
})

contactBtn.addEventListener("click", function() {
    contactSection.style.display = "flex";
    workSection.style.display = "none";
    workBtn.lastChild.style.display = "none";
    aboutSection.style.display = "none";
    aboutBtn.lastChild.style.display = "none";
    infoSection.style.display = "none";
    infoBtn.lastChild.style.display = "none"

    workBtn.classList.remove("linkActive");
    infoBtn.classList.remove("linkActive");
    aboutBtn.classList.remove("linkActive");
})