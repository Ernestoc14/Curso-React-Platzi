import React from 'react';
import { ToDoContext } from '../ToDoContext/ToDoContext';

function ToDoCounter(){
    const {
        totalToDos,
        doneToDos
    } = React.useContext(ToDoContext)
    return(
        <h2 className="text-xl mt-40 mb-10 font-bold" >You have finished {doneToDos} of {totalToDos} TODOS</h2>
    )
}

export default ToDoCounter;