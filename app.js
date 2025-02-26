const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span"); /// le querySelectorAll va prendre en compte toutes les values dans span,c-a-d toutes les values de chaque span 
const images = document.querySelectorAll(".image"); /// prendre tout le contenu du div image, c-a-d toutes les images 

inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });

    inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
    });
});

toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    });
});

function moveSlider(){
    let index = this.dataset.value;

    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img) => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bullets.forEach((bull) => bull.classList.remove("active")); /// effacer entièrement la propriété active à tous les points
    this.classList.add("active"); /// rajouter la propriété au point actif / cliqué
}

bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider);
}
);