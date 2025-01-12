document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".ppAcc");
    const text = document.querySelector(".textAcc");
    const bouton = document.querySelector(".button-85");

    setTimeout(() => {
        image.style.opacity = "1";
    }, 400);

    setTimeout(() => {
        text.style.opacity = "1";
    }, 600);
    setTimeout(() => {
        bouton.style.opacity = "1";
    }, 600);
    setTimeout(()=>{
        text.style.transform="translateX(0)";
    },660)
});
