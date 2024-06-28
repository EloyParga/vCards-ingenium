var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });

}

// JavaScript para ampliar la imagen del código QR
document.querySelector('.qr-section .qr-link').addEventListener('click', function(event) {
    event.preventDefault();
    var src = this.getAttribute('href');
    var modal = document.createElement('div');
    modal.style.borderRadius ='0'
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    modal.innerHTML = '<img src="' + src + '" style="max-width:100%; max-height:100%;" />';
    modal.addEventListener('click', function() {
        this.parentElement.removeChild(this);
    });
    document.body.appendChild(modal);
});

//Funcion que se ejecutara cuando pulsemos el boton para descargar el contacto 
function abrirContacto() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  //Verifica el sistema del terminal que se esta usando, si es android lo guardara en la lista de contactos  
  if (/android/i.test(userAgent)) {
    // Dispositivo Android
    window.location.href = "intent:content://com.android.contacts/contacts#Intent;action=android.intent.action.VIEW;end";
  }
}

//Funcion para mostrar o ocultar el popUP
function mostrarOcultar() {
  var panel = document.getElementById('aviso');
  if (panel.style.display === "none") {
    panel.style.display = "block";
  } else {
    panel.style.display = "none";
  }
  panel.style.borderRadius = '0';
  panel.style.position = 'fixed';
  panel.style.top = '0';
  panel.style.left = '0';
  panel.style.width = '100vw';
  panel.style.height = '100vh';
  panel.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  panel.style.display = 'flex';
  panel.style.justifyContent = 'center';
  panel.style.alignItems = 'center';
  panel.style.zIndex = '1000';
}
// Ocultar el div cuando se hace clic dentro de él
document.getElementById('aviso').addEventListener('click', function (event) {
  this.style.display = 'none';
});




// Esta variable almacena el idioma actual, supongamos que empezamos con español.
var idiomaActual = 'es';



function toggleLanguage() {
  var img = document.getElementById('currentFlag');
  if (img.src.includes('/img/flags/espana.png')) {
      img.src = '/img/flags/usa.png'; // Asegúrate de tener una imagen llamada 'usa.png'
      img.alt = 'English';
  } else {
      img.src = '/img/flags/espana.png';
      img.alt = 'Español';
  }


     // Alternar el idioma actual entre 'en' (inglés) y 'es' (español)
     idiomaActual = (idiomaActual === 'es') ? 'en' : 'es';

     // Seleccionar todos los elementos que tienen atributos de traducción.
     var elementos = document.querySelectorAll('[data-es], [data-en]');
 
     // Actualizar el texto de cada elemento según el idioma actual.
     elementos.forEach(function(elemento) {
         var icon = elemento.querySelector('i'); // Selecciona el icono dentro del elemento
         var bold = elemento.querySelector('b'); // Selecciona el texto en negrita dentro del elemento
         var text = elemento.getAttribute('data-' + idiomaActual); // Obtiene el texto en el idioma actual
 
         if (bold) {
             // Actualizar el texto del elemento en negrita según el idioma actual
             bold.textContent = bold.getAttribute('data-' + idiomaActual);
         }
 
         if (icon) {
             // Si el icono existe, actualizar el texto dejando el icono intacto
             elemento.innerHTML = icon.outerHTML + ' ' + text;
         } else if (bold) {
             // Si hay texto en negrita, actualizar el texto del párrafo dejando el número intacto
             elemento.innerHTML = bold.outerHTML + ' ' + text;
         } else {
             // Si no hay icono ni texto en negrita, simplemente actualizar el texto
             elemento.textContent = text;
         }
     });
}





