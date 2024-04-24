function añadirTarea(){
    let nuevatareatxt = document.getElementById("txtTarea").value;

    if (nuevatareatxt ===""){
        alert("Por favor, Ingrese una tarea")
        return;
    }
    
    let input = document.getElementById("txtTarea")
    input.addEventListener('keypress', function(event){
        if (event.key === "Enter"){
            let elementonuevo = document.createElement("li")
    elementonuevo.textContent = nuevatareatxt+ " ";

    let btneliminar = document.createElement("button")
    btneliminar.textContent="Eliminar";
    btneliminar.onclick = function(){ elementonuevo.remove()}

    elementonuevo.appendChild(btneliminar)
    
    document.getElementById("listatarea").appendChild(elementonuevo);

    document.getElementById("txtTarea").value = ""
        }
    })


    let elementonuevo = document.createElement("li")
    elementonuevo.textContent = nuevatareatxt+ " ";

    let btneliminar = document.createElement("button")
    btneliminar.textContent="Eliminar";
    btneliminar.onclick = function(){ elementonuevo.remove()}

    elementonuevo.appendChild(btneliminar)
    
    document.getElementById("listatarea").appendChild(elementonuevo);

    document.getElementById("txtTarea").value = ""
}
