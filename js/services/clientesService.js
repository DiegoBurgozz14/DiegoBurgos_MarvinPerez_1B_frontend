const API_URL = "http://localhost:8080/api/clientes";

export async function getClientes() {
    
    try{
        const respuesta = await fetch(API_URL);

        if(!respuesta.ok){
            console.error("Error al obtener clientes");
            throw new Error("Error al obtener clientes")
            return await respuesta.json;
        }

        const clientes = await respuesta.json();

        return clientes;
    }
    catch(error){
        alert("Hubo un error al obtener clientes: " + error)
        throw error;
    }
};

export async function getCliente(id){
   try{
    const respuesta = await fetch(`${API_URL}/${id}`);
    
     if(!respuesta.ok){
            console.error("Error al obtener cliente");
            throw new Error("Error al obtener cliente")
            return await respuesta.json;
        }

        const cliente = await respuesta.json();

        return cliente;
    }
    catch(error){
        alert("Hubo un error al obtener cliente: " + error)
        throw error;
}}

export async function crearCliente(cliente){
    const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type" : "application/json"

        },
        body: JSON.stringify(cliente)
    });
    if (!respuesta.ok) throw new Error ("Error al crear");
    return await respuesta.json();
}

export async function borrarCliente(id) {
    const respuesta = await fetch(`${API_URL}/${id}`,
        {method: "DELETE"}
    );
    if(!respuesta.ok) throw new Error("Error al eliminar");
    return true;
}

