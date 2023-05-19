function ToDoItem({text, done}){
    return(
            <div>
                <span>V {done}</span>
                <p className="mt-2 mb-2" >{text}</p>
                <span>X</span>
            </div>
        )
    }

export default ToDoItem
