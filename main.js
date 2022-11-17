const nav = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger")
const button = document.getElementById("btn")

hamburger.addEventListener("click", () => {

    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        hamburger.setAttribute("aria-expanded", true);
    }
    else{
        nav.setAttribute("data-visible", false);
        hamburger.setAttribute("aria-expanded", false);
    }
});

button.addEventListener("click", () => {
    button.style.cssText ="outline: 40px solid rgb(210, 216, 249, 0.2);";
})









