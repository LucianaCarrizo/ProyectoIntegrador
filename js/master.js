let productosHTML = document.querySelector('.productos');

fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((productos)=>{
    productos.forEach(producto => {
        productosHTML.innerHTML += `
        <article class="producto col-12 col-md-6 col-lg-4">
            <img class="w-100" src="${producto.imagen}" alt="${producto.nombre}">
            <h2 class="text-center" >${producto.nombre}</h2>
             
            <a   id='${JSON.stringify(producto)}' href= '#' class='btn btn-outline-dark d-block botonDetalle' >Ver detalle </a>
        </article>
        `
    })
    
    let botonDetalle = document.querySelectorAll('.botonDetalle') 
    let arrayMiListaDeProductos
    let miObjeto
    let codigo

    botonDetalle.forEach(productoSeleccion => {
         productoSeleccion.addEventListener('click', function(e){
             e.preventDefault()
             let miListaDeProductos = localStorage.getItem('detallesProducto')
             if(miListaDeProductos == null){
                 arrayMiListaDeProductos = [];
             }else{
                 arrayMiListaDeProductos = JSON.parse(miListaDeProductos)
             } 
            arrayMiListaDeProductos.push(this.id)
            miObjeto = JSON.parse(arrayMiListaDeProductos[0])
            codigo = miObjeto.codigo
            localStorage.setItem('detallesProducto', JSON.stringify(arrayMiListaDeProductos))
            location.href = `detalle.html?codigo=${codigo}`             
         })    
     } )
    
})
.catch((error)=>{
    console.log('Ufff ha ocurrido un error '+error )
})
