function ToDoCounter({
    done,
    left
}){
    return(
        <h2 className="text-xl mt-40 mb-10 font-bold" >You have finished {done} of {left} TODOS</h2>
    )
}

export default ToDoCounter;