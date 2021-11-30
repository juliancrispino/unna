AOS.init();

let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal = desplazamientoActual;
})


//Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

let hamburguesa = document.querySelector(".hamburguer");

hamburguesa.addEventListener("click", function(){
    if(semaforo){
        hamburguesa.style.color = "#fff";
        semaforo = false;
    } else{
        hamburguesa.style.color = "#000";
        semaforo = true;
    }

    enlacesHeader.classList.toggle("menuDos");
})

enlacesHeader.addEventListener('click', function(){
    enlacesHeader.classList.toggle("menuDos");
    semaforo = true
})


// ANIMATE numbers//
var results = $('.results');
if(results.length > 0){
    $('.results').waypoint(function(){           //detecto que estoy en la zona
        $('.number:nth-child(1) h4').animateNumber({ number: 22 }, 2700);
        $('.number:nth-child(2) h4').animateNumber({ number: 490 }, 2900);
        $('.number:nth-child(3) h4').animateNumber({ number: 6500 }, 2600);
        $('.number:nth-child(4) h4').animateNumber({ number: 4800 }, 2800);
    }, {
        offset:'80%'
    });
}