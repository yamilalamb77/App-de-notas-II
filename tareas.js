let fs = require('fs');
module.exports = moduloTarea = {


   leerJSON: () => {
      let listaDeTareas = fs.readFileSync('./tareas.json', 'utf-8')
      return JSON.parse(listaDeTareas)
   },



   escribirJSON: (titulo, estado) => {
      let nuevaTarea = {
         titulo: titulo,
         estado: estado

      };
      let tareasAnteriores = moduloTarea.leerJSON();

      tareasAnteriores.push(nuevaTarea);
      moduloTarea.guardarTarea(tareasAnteriores)

   },
   guardarTarea: (info) => {
      let nuevoJSON = JSON.stringify(info)

      fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')
   },
   deshacer: () => {

      let tareas = moduloTarea.leerJSON();
      tareas.pop();
      moduloTarea.guardarTarea(tareas)

   },
   filtrarPorEstado: (estado) => {

      let listaDeTareas = moduloTarea.leerJSON();
      let tareasFiltradas = listaDeTareas.filter(tarea => {
         return tarea.estado.toLowerCase() === estado.toLowerCase()
      })
      return tareasFiltradas
   },


}
//console.log(moduloTarea.filtrarPorEstado("terminada"));