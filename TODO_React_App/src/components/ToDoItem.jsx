import "./ToDoItem.css"

function ToDoItem({text, done, onComplete, onDelete}){
    return(
            <li className="todo-item w-10/12 flex flex-row justify-around items-center h-8">
                <button 
                    onClick={onComplete}
                    className={`check ${done && "check--active"}`}
                ></button>
                <p className={`${done && "todo-item-p-done"}`}>{text}
                    
                </p>
                <button onClick={onDelete} className="close-item w-6 h-6"></button>
            </li>
        )
    }

    

export default ToDoItem
