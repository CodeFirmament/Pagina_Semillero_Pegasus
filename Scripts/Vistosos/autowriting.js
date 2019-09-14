/* 
Sistema de autowriting, por el momento los datos no vienen de archivos como
debería ser.

Usé un forking de un ejemplo de w3schools:
  https://www.w3schools.com/howto/howto_js_typewriter.asp

Desarrollado por J. Andŕes Gutiérrez, derechos GNU/Linux actuales (2019)

*/

/*Textos*/ 
var txt = ['Por la ciencia y computación',"Don't be evil",'...Y se hizo los transistores.',
           'Entendimiento sobre complejidad','De la experiencia, viene la perspectiva'];

var texto = "";

var speed = 50; /* Que tan rápido se escribe */

var i = 0;

var numero_index = 0;




function typing() {
  if (i < texto.length) {
    document.getElementById("Efecto_Typing").innerHTML += texto.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}

function borrar(){

  if(i >= 0){
    let longitud_palabra= document.getElementById("Efecto_Typing").innerHTML.length;
    document.getElementById("Efecto_Typing").innerHTML = 
    document.getElementById("Efecto_Typing").innerHTML.substring(0,longitud_palabra-1);
    i--;
    setTimeout(borrar, speed);
  }

}

function Loop_principal(){
    
    texto = txt[numero_index];
    typing();
    setTimeout(borrar,6000);
    numero_index++

    if(numero_index>=5){
      numero_index = 0;
    }

    setTimeout(Loop_principal,9000);
  
}

// Inicia el loop principal cuando recien se carga la página
window.onload=Loop_principal;