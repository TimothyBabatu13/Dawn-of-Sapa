const button = document.querySelector("#small");
const firstDiv = document.querySelector("#first--small");
const secondDiv = document.querySelector("#second--small");
const thirdDiv = document.querySelector("#third--small");
const smallScreenSize = document.querySelector("#small-screen-size");
const heroSection = document.querySelector(".hero");

button.addEventListener("click", ()=>{
    button.classList.toggle("small");
    firstDiv.classList.toggle("first--small");
    secondDiv.classList.toggle("second--small");
    thirdDiv.classList.toggle("none");
    smallScreenSize.classList.toggle("small-sreen-size-display");
    heroSection.classList.toggle("hero--margin");
})
