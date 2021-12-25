let moduloTareas = require('./tareas');
let process = require('process');
let comando = process.argv[2];

//moduloTareas.leeJSON 
switch (comando) {

    case "listar":
        let tareas = moduloTareas.leerJSON()

        if (tareas.length === 0) {
            console.log("tu lista de tareas esta vacia");

        } else {
            /* for(let i = 0; i < tareas.length; i++){
                 console.log("titulo: " + tareas[i].titulo);
                 console.log("estado: " + tareas[i].estado + '\n' );
                 console.log("________________");
             }*/
            tareas.forEach(tarea => {

                console.log("titulo: " + tarea.titulo);
                console.log("estado: " + tarea.estado + '\n');
                console.log("________________");

            });

        }
        break;
    case "crear":
        let titulo = process.argv[3];
        let estado = "pendiente";
        moduloTareas.escribirJSON(titulo, estado)
        break;

    case "deshacer":
        moduloTareas.deshacer()
        break;
    case "filtrar":
       
        let listaFiltrada = moduloTareas.filtrarPorEstado(process.argv[3]);
        for (let i = 0; i < listaFiltrada.length; i++) {
            console.log(listaFiltrada[i].titulo);
            console.log("**********");
        }
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción");
        break;
    default:
        console.log("No entiendo qué quieres hacer");
}
