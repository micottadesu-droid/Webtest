const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {   // cuando bajas más de 50px
        header.classList.add("scrolled");
    } else {
    header.classList.remove("scrolled");
    }
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

const createOdometer = (el,value)=>{
    const odometer = new Odometer({
        el: el,
        value: 0,
    });

    let hasRun = false;

    const options = {
        threshold: [0, 0.9],
    };

    const callback = (entries,observer)=>{
        entries.forEach(entry=>{
            if (entry.isIntersecting){
                if(!hasRun){
                    odometer.update(value);
                    hasRun = true;
                }
            }
        });
    };

    const observer = new IntersectionObserver(callback,options);
    observer.observe(el);

}

const totalOdometer = document.querySelector(".Total");
createOdometer(totalOdometer,192);

const arquiOdometer = document.querySelector(".Arqui");
createOdometer(arquiOdometer,15);

const civilOdometer = document.querySelector(".Civil");
createOdometer(civilOdometer,44);

const inventOdometer = document.querySelector(".Invent");
createOdometer(inventOdometer,6);

const otroOdometer = document.querySelector(".Otro");
createOdometer(otroOdometer,127);

