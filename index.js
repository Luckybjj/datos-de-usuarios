// Función ánonima asíncrona IIFE con Patrón Módulo
(async () => {

    // Se guarda la URL en una constante
    const url = 'https://randomuser.me/api/?results=10';

    // Bloque try/catch para conectarse a la URL y para el manejo de errores
    try {
        // Se recibe una respuesta 
        const res = await fetch(url);
       // Se almacena el arreglo de datos recibidosen una variable results se aplica destructuring para accder al atributo results
        const { results } = await res.json()
        // Se manipula el dom mediante id
        let lista = document.getElementById('user-data');

        // Se recorre el arreglo obtenido con forEach() estos se iran renderizando medianite innerHTML
        
        results.forEach((elemento)=>{
            lista.innerHTML += `
                        <div>
                            <div class = "my-3">
                                <div class="card col-3">
                                    <img src='${elemento.picture.large}' >
                                    <p>Nombre: ${elemento.name.title} ${elemento.name.first} ${elemento.name.last}</p>
                                    <p>Correo: ${elemento.email}</p>
                                    <p>Telefono: ${elemento.phone}</p>
                                <div>    
                            <div>
                        <div>      
                              `;
        });
    } 
    catch(err) {
        console.log(err);
    }
    
})();