const texto = document.querySelector('.cargando');
const pantalla= document.querySelector('.pantalla');
let carga = 0
let int=setInterval(borroso,30);

const scala = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
function borroso() {
    carga++
    if (carga>99){
        clearInterval(int);
    }
    if (carga==100){
        carga = "cargado!";
    }
    texto.innerText = `${carga}`
    texto.computedStyleMap.opacity= scala(carga,0,100,1,0);
    pantalla.style.filter = `blur(${scala(carga, 0, 100, 90, 0)}px)` 

}
