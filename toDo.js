let tarea = document.querySelector("#tarea");
let btnAdd = document.querySelector("#btnAdd");
let lista = document.querySelector("#lista");
let tareas = [];

btnAdd.addEventListener("click", agregar);

function agregar() {
    if (tarea.value.trim() === "") {
        return;
    }
    console.log(tareas);  //linea de prueba consola  BORRAR
    tareas.push(tarea.value);
    tarea.value = "";

    let li = document.createElement("li");
    let btnDelete = document.createElement("button");
    let indice = tareas.length - 1;

    btnDelete.textContent = `Done`;
    btnDelete.addEventListener("click", () => eliminar(indice));
    li.textContent = tareas[indice];



    function eliminar(indice) {
        tareas = tareas.filter((_, i) => i !== indice);
        li.remove();
    }

    lista.appendChild(li);
    li.appendChild(btnDelete);

}



