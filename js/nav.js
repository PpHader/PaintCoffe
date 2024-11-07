window.onscroll = function () {
    var navbar = document.querySelector('.navbar');
    var content = document.querySelector('.content');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Manejar el envío del formulario
document.getElementById('subscribeForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Evitar que la página se recargue

    // Mostrar el modal
    const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    welcomeModal.show();

    // Limpiar el formulario después de enviar
    document.getElementById('emailInput').value = '';
});

window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 100) { // Cambiar al hacer scroll más de 100px
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-dark-scrolled");
    } else {
        navbar.classList.remove("bg-dark-scrolled");
        navbar.classList.add("bg-transparent");
    }
};

/* icono de contacto */
function scrollToForm() {
    const formSection = document.getElementById('contact-form');
    formSection.scrollIntoView({ behavior: 'smooth' });
}