document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".ppAcc");
    const text = document.querySelector(".textAcc");
    const bouton = document.querySelector(".boutonDecouvrir");
    setTimeout(() => {
        image.style.opacity = "1";
    }, 400);

    setTimeout(() => {
        text.style.opacity = "1";
    }, 600);

    setTimeout(() => {
        bouton.style.opacity = "1";
    }, 600);

    setTimeout(() => {
        text.style.transform = "translateX(0)";
    }, 660);
});

document.querySelector(".boutonDecouvrir").addEventListener("click", function () {
    const topElement = document.querySelector(".top");
    topElement.style.opacity = "0";  
    topElement.style.pointerEvents = "none";

    const presentation = document.querySelector(".midPresent");
    presentation.style.marginTop = "0"; 
    presentation.style.transition = "margin-top 1s ease-in-out";
    
    setTimeout(() => {
        presentation.style.opacity = "1";  
    }, 600);
    

    
    
});

// Quand l'utilisateur clique sur la croix
document.querySelector(".imgCross").addEventListener("click", function () {
    const topElement = document.querySelector(".top");
    
    topElement.style.opacity = "1";  
    topElement.style.pointerEvents = "auto";  

    const presentation = document.querySelector(".midPresent");
    presentation.style.marginTop = "100vh";  
    presentation.style.transition = "margin-top 1s ease";
    


    setTimeout(() => {
        presentation.style.opacity = "0";
    }, 800);

    const text = document.querySelector(".textAcc");
    const image = document.querySelector(".ppAcc");
    text.style.transform = "translateX(-100px)";
    text.style.opacity = "0";
    image.style.opacity = "0";
        setTimeout(() => {
        text.style.opacity = "1";
        text.style.transform = "translateX(0)"; 
        image.style.opacity = "1";  
    }, 200);  
});
