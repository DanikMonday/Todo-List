// Se utiliza useState que sirve para manejar estados dentro del DOM
// esto servirá para controlar los 2 estados del form, con tarea y sin ella
import React, { useState } from "react";
// Aqui se empieza a agregar funcionalidad, primero se declaran las constantes dentro de la función global
const FormTodo = props => {
  // Primero se indica que debe tener en cuenta las propiedades de handleAddItem (props:envia propiedades carcteristicas)
  const { handleAddItem } = props; 
  // Se inicaliza uno de los estados en vacío
  const [description, setDescription] = useState(""); 
// Se declara el anejador del evento 
  const handleSubmit = e => {
    //  e.preventDefault para evitar que la página se recargue y se pierda info
    e.preventDefault(); 
    // Se crea un nuevo objeto y se le asignan propiedades
    handleAddItem({
        done: false,
        id: (+new Date()).toString(),
        description //La propiedad description solo se declara pero no se le asigna valor
    });
// setDescription actualiza el estado de la prop description cuando se ejecuta el evento onSubmit
    setDescription(""); 
};
// Ahora se va a retornar el html fuera de la función, aquí tambien se llama la funcionalidad

return (
  // la función para evitar que la página se recargue y se pierda info se llama para todo el form
    <form onSubmit={handleSubmit}>
    
        <div className="todo-list">
        <div className="file-input">

            <input
            type="text"
            className="text"
            value={description}
            // Permite escuchar el cambio de valor en la entrada
            onChange={e => setDescription(e.target.value)}
            />
      
            <button
            className="button pink"
            // Para que el botón no funcione si no hay nada en la descripción del input
            disabled={description ? "" : "disabled"}
            >
            Add
            </button>
        </div>
        </div>
    </form>
);
};

export default FormTodo