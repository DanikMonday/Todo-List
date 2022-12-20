import React from "react";
import Checkbox from "../components/Checkbox";

const TaskList = props => {
const { list, setList } = props;
// Se crea un manejador de eventos, con el evento onChangeStatus
const onChangeStatus = e => {
    const { name, checked } = e.target;

    // Aquí con .map se va a revisar que se encuentre completada la tarea
    const updateList = list.map(item => ({
    ...item,
    done: item.id === name ? checked : item.done
    }));
    setList(updateList);
};

// Para remover tareas finalizadas se crea un manejador de eventos
const onClickRemoveItem = e => {
// Filtra los items que no esten realizados
const updateList = list.filter(item => !item.done);
// Actualiza la lista con los items que no esten completados
setList(updateList);
};



const chk = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
));

 

return (
    <div className="todo-list">
    {/* Este condicional revisa el estado de la lista, si todo esta cheeckeadoaparece el mensaje de que no hay tareas */}
        {list.length ? chk : "No tasks"}
        {/* El boton delete all done permite elimnar todas las que ya esten checkeadas */}
        {list.length ? (
            <p>
               
                <button className="button blue" onClick={onClickRemoveItem}>
                Delete all done
                </button>
            </p>
        ) : null}
    </div>
);
};

export default TaskList;

