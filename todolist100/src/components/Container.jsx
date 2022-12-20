// Tambien se utiliza useState para poder cambiar el estado
import React, { useState } from "react";
// Se necesita importar estos componentes pues se encuentran dentro del Container
import TaskList from "../components/TaskList";
import FormTodo from "../components/FormTodo";

const Container = () => {
// Se crea un nuevo estado llamado lista, que es un array vacio para almacenar datos que se pongan en FormTodo
const [list, setList] = useState([]);

const handleAddItem = addItem => {
setList([...list, addItem]); 
};

return (
<div>
{/* Lista cambia el estado cuando reciba los parametros que esten dentro de FormTodo  */}
<FormTodo handleAddItem={handleAddItem} />

<TaskList list={list} setList={setList} />
</div>
);
};
export default Container;