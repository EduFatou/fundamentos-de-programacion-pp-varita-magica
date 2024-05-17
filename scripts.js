/*Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

2.3 Bloques de article o section: Cambia el color de fondo.

Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

3.3 Bloques de article o section: Color de fondo distinto al de párrafo. */


document.addEventListener("click", function(event){
    event.preventDefault()
});


/*
let gif = document.images.src;

gif.onclick = function () {

    gif.src = "fundamentos-de-programacion-pp-varita-magica/assets/magic-1.gif";
}


document.getElementsByTagName("p").style.color = "red";

ya no sé ni qué he hecho para llegar a eso...
*/

const rojo = document.querySelectorAll("p");

rojo.addEventListener("click", function(event){
    rojo.style.color = "red";
});
//tampoco cambia


