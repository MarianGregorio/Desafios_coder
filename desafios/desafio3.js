let variedadServicios = [{id: 1 , nombre: "Customer experience" , descripcion: "Fidelización del cliente a través de experiencias hechas a medida." , precio: 200},
                         {id: 2 , nombre: "Business Model", descripcion: "Descubrimiento de oportunidades y diseño de una estrategia integral de negocio.", precio: 300},
                         {id: 3, nombre: "Digital Transforme", descripcion: "Construccion de negocios digitales, agiles, dinamicos y rentables.", precio: 400},
                         {id: 4, nombre: "Digital Strategy", descripcion: "Potencie exponencialmente su negocio y obtenga resultados concretos.", precio: 400}
                        ]
                        
let serviciosElejidos = [];

alert("Bienvenido! ¿Cual de nuestros servicio desea escoger? \n 1: Customer experience \n 2: Business Model \n 3: Digital Transforme \n 4: Digital Strategy");
seleccionar()
obtenerTotal()

function seleccionar(){
    let continua;
    while(continua != false){
        let seleccion = parseInt(prompt("Ingrese el ID del servicio que desea:"));
        let servicoSeleccionado = variedadServicios.find(servicio => servicio.id == seleccion);
        serviciosElejidos.push(servicoSeleccionado);
        alert("El servicio que eligio es: " + servicoSeleccionado.nombre );
        continua = confirm ("¿Desea agregar otro servicio?");
    }
    console.log(serviciosElejidos);

    borrado = confirm("¿Desea eliminar algun servicio ya seleccionado?");
    if (borrado == true){
        let eliminar = parseInt(prompt("Ingrese el Id del servicio que desea eliminar:"));
        let servicioAeliminar = serviciosElejidos.find(servicio => servicio.id == eliminar);
        serviciosElejidos.splice(servicioAeliminar,1);
    } 
}

function obtenerTotal(){
    alert("La servicios elejidos son: " + serviciosElejidos.length);
    let total = serviciosElejidos.reduce((acc, elemento) => acc + elemento.precio, 0);

    alert("El total de la compre es: " + total + " dolares");
}

