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
