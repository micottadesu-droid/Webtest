const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {   // cuando bajas más de 50px
        header.classList.add("scrolled");
    } else {
    header.classList.remove("scrolled");
    }
});

const label = document.querySelector(".label")
const menu = document.querySelector(".menu")

label.addEventListener("click", () => {
    menu.classList.toggle("active");
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

const proyectoOdometer = document.querySelector(".Proyecto");
createOdometer(proyectoOdometer,190);

const contratoOdometer = document.querySelector(".Contrato");
createOdometer(contratoOdometer,200000);

const clienteOdometer = document.querySelector(".Cliente");
createOdometer(clienteOdometer,80);

const copOdometer = document.querySelector(".COP");
createOdometer(copOdometer,216954041254);

const smlmvOdometer = document.querySelector(".SMLMV");
createOdometer(smlmvOdometer,252354);

