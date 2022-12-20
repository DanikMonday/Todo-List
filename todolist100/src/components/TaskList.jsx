import React from "react";
import Checkbox from "../components/Checkbox";

const TaskList = props => {
const { list, setList } = props;
// Creamos un manejador de eventos onchangestatus lo que hace es
//  cambiar el estado cuando exista el evento check. tomando 
//  los elementos de la lista de tareas. El manejador de eventos es el método. 

const onChangeStatus = e => {
    const { name, checked } = e.target;
    // con map se recorrea en array y se actualizan las tareas que 
    // están terminadas y las que no
    const updateList = list.map(item => ({
    ...item,
    done: item.id === name ? checked : item.done
    }));
    setList(updateList);
};

// Definimos otro manejador de eventos para eliminar de la lista los item
// que están chequeados. filtrando los ítems que no estén completados. 
// setList recarga la lista con los items que aun no se han completado

const onClickRemoveItem = e => {
const updateList = list.filter(item => !item.done);
setList(updateList);
};

// tenemos una key es decir una llave como un identificador único 
// que revisa el id del item y la data para chequear un único elemento, 
// el id y la data hace que sean únicos. 
// Llamamos al controlador del evento onchangestatus 

const chk = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
));

// en el html tenemos la lista que se adecua a la extensión de elementos que 
// ingresamos en le form, si lenght es igual a cero en el array list le decimos
// que imprima ‘no tasks’ 

return (
    <div className="todo-list">
        {list.length ? chk : "No tasks"}
        {list.length ? (
            <p>
                {/* también tenemos en botón, el cual mediante onclick
                dispara el evento que habíamos creado en onclickremoveitem */}
                <button className="button blue" onClick={onClickRemoveItem}>
                Delete all done
                </button>
            </p>
        ) : null}
    </div>
);
};

export default TaskList;

