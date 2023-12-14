<!--  Script-->

const card = document.querySelector(".card");
const addToCartButton = document.getElementById("addToCartButton");

let hoverTimeout;

card.addEventListener("mouseenter", () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
        addToCartButton.classList.remove("hidden");
        card.style.transform = "scale(1.1)";
        card.style.transition = "transform 0.3s ease";
    }, 300); // Adjust the delay as needed
});

card.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
        addToCartButton.classList.add("hidden");
        card.style.transform = "scale(1)";
        card.style.transition = "transform 0.3s ease";
    }, 300); // Adjust the delay as needed
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
