
let codigo = location.search;

let codigoProducto = new URLSearchParams(codigo);

let codigoSeleccionado = codigoProducto.get('codigo');

let codigoFinal = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let imagen = document.getElementById('imagen');
let peso = document.getElementById('peso');
let detalle = document.getElementById('detalle');
let uso = document.getElementById('uso');

let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))
let arrayDetalle = JSON.parse(detalleProducto[0]);
console.log(arrayDetalle);

codigoFinal.innerHTML = `Código del Producto: ${codigoSeleccionado}`;
nombre.innerHTML = `${arrayDetalle.nombre}`;
peso.innerHTML = `Peso: ${arrayDetalle.peso}`;
imagen.innerHTML = `<img class="w-100" src="${arrayDetalle.imagen}" alt="${arrayDetalle.nombre}"/>`;
detalle.innerHTML = `${arrayDetalle.detalle}`;
uso.innerHTML = `Forma de administracion: ${arrayDetalle.uso}`;

let botonRegresar = document.getElementById('botonRegresar');
botonRegresar.addEventListener('click', function(){
    localStorage.clear()
    location.href = 'index.html'
})