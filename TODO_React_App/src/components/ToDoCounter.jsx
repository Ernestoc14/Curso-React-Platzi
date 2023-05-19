function ToDoCounter(props){
    return(
        <h2 className="text-xl mt-40 mb-10 font-bold" >You have finished {props.done} of {props.left} TODOS</h2>
    )
}

export default ToDoCounter;