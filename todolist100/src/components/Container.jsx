// Tambien se utiliza useState para poder cambiar el estado
import React, { useState } from "react";
// Se necesita importar estos componentes pues se encuentran dentro del Container
import TaskList from "../components/TaskList";
import FormTodo from "../components/FormTodo";

const Container = () => {
const [list, setList] = useState([]);

const handleAddItem = addItem => {
setList([...list, addItem]); 
};

return (
<div>
<FormTodo handleAddItem={handleAddItem} />

<TaskList list={list} setList={setList} />
</div>
);
};
 
export default Container;