$(document).ready(function() {
    // Cargar los modales solo si el contenedor está vacío
    $('#modals-container').load('modales.html', function(response, status, xhr) {
        if (status === "error") {
            console.error("Error cargando modales:", xhr.status, xhr.statusText);
        }
    });
});