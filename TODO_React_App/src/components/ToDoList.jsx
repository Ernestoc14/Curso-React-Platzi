function ToDoList({children}){
    return(
        <section>
            <ul className="flex flex-col items-center ">
                {children}
            </ul>
        </section>
    )
}

export default ToDoList;