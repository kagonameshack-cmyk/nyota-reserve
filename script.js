const navbar =
document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


const menuToggle =
document.getElementById("menuToggle");

const mobileMenu =
document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    reveals.forEach(section => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

revealSections();


const cursor =
document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {

    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";

});

/* HOVER EFFECT */

const hoverElements =
document.querySelectorAll(
"a, .card, .gallery-item, .testimonial-card, .stat-box"
);

hoverElements.forEach(el => {

    el.addEventListener("mouseenter", () => {

        cursor.classList.add("hover");

    });

    el.addEventListener("mouseleave", () => {

        cursor.classList.remove("hover");

    });

});
