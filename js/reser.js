document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos
    const nombre =document.getElementById('nombre').value;
    const ceramica = document.getElementById('ceramica').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Mostrar los valores en el modal
    document.getElementById('nombreseleccionado').innerText = nombre;
    document.getElementById('ceramicaSeleccionada').innerText = ceramica;
    document.getElementById('fechaSeleccionada').innerText = fecha;
    document.getElementById('horaSeleccionada').innerText = hora;

    // Mostrar el modal de confirmación
    const reservaModal = new bootstrap.Modal(document.getElementById('reservaModal'));
    reservaModal.show();
});

document.getElementById("numero-nequi").value = "3113901549";

document.getElementById('metodo-pago').addEventListener('change', function() {
    const detallesTarjeta = document.getElementById('detalles-tarjeta');
    const detallesNequi = document.getElementById('detalles-nequi');
    const qrContainer = document.getElementById('qr-container');
    
    // Ocultar ambos detalles por defecto
    detallesTarjeta.style.display = 'none';
    detallesNequi.style.display = 'none';
    qrContainer.style.display = 'none';

    // Mostrar el formulario correspondiente al método de pago seleccionado
    if (this.value === 'Tarjeta de Crédito' || this.value === 'Tarjeta de Débito') {
        detallesTarjeta.style.display = 'block';
    } else if (this.value === 'Nequi') {
        detallesNequi.style.display = 'block';
    }
});

// Escuchar el clic en el botón para generar el código QR
document.getElementById('btn-generar-qr').addEventListener('click', function() {
    const numeroNequi = document.getElementById('numero-nequi').value;

    // Verificar que el número esté ingresado
    if (numeroNequi) {
        // Mostrar el contenedor del QR y el número de referencia
        document.getElementById('qr-container').style.display = 'block';
    } else {
        alert('Por favor, ingresa tu número de teléfono registrado en Nequi.');
    }
});

// Obtener el modal y el botón de cierre
const modal = document.getElementById('reservaModal');
const form = document.getElementById('reservaForm');

// Obtener los elementos de los métodos de pago y los detalles
const metodoPagoSelect = document.getElementById('metodo-pago');
const detallesTarjeta = document.getElementById('detalles-tarjeta');
const detallesNequi = document.getElementById('detalles-nequi');
const numeroNequiInput = document.getElementById('numero-nequi');
const numeroTarjetaInput = document.getElementById('numero-tarjeta');
const fechaExpiracionInput = document.getElementById('fecha-expiracion');
const cvvInput = document.getElementById('cvv');

// Función para manejar la visibilidad de los detalles de pago
function manejarDetallesPago() {
    const metodoPago = metodoPagoSelect.value;

    // Ocultar ambos detalles por defecto
    detallesTarjeta.style.display = 'none';
    detallesNequi.style.display = 'none';

    // Mostrar los detalles correspondientes según el método de pago seleccionado
    if (metodoPago === 'Tarjeta de Crédito' || metodoPago === 'Tarjeta de Débito') {
        detallesTarjeta.style.display = 'block';  // Mostrar detalles de tarjeta
    } else if (metodoPago === 'Nequi') {
        detallesNequi.style.display = 'block';  // Mostrar detalles de Nequi
    }
}

// Agregar un evento para que cuando se cambie el método de pago se actualicen los detalles
metodoPagoSelect.addEventListener('change', manejarDetallesPago);

// Ejecutar la función de manejarDetallesPago al cargar la página por si ya se había seleccionado un método
manejarDetallesPago();

// Función para limpiar los campos del formulario al cerrar el modal
function limpiarCampos() {
    // Limpiar los campos del formulario
    form.reset();  // Resetea todos los campos del formulario (inputs, selects, textareas)
    
    // Limpiar el contenido del modal (si es necesario)
    document.getElementById('nombreseleccionado').innerText = '';
    document.getElementById('ceramicaSeleccionada').innerText = '';
    document.getElementById('fechaSeleccionada').innerText = '';
    document.getElementById('horaSeleccionada').innerText = '';
    
    // Ocultar detalles de pago
    detallesTarjeta.style.display = 'none';
    detallesNequi.style.display = 'none';
}

// Agregar un evento para que se limpie al cerrar el modal
document.getElementById('reservaModal').addEventListener('hidden.bs.modal', function () {
    limpiarCampos();  // Llama a la función para limpiar los campos
});

