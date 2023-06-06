import './ToDoForm.css'

function ToDoForm() {
    return (
        <form className='flex flex-col justify-center items-center px-8 py-10 h-72 rounded-lg w-11/12 max-w-xs bg-slate-100'>
            <label className=' text-center font-bold text-2xl text-slate-800 mb-6'>Adding a New Task</label>
            <textarea className=' h-16 w-60 border-solid border-2 border-black rounded-md shadow-2xl text-xl text-center' placeholder="Write a ToDo Here!!!"></textarea>
            <div className="flex mt-6 justify-between items-center w-full">
                <button className='ToDoForm-button ToDoForm-button--cancel'>Cancel</button>
                <button className='ToDoForm-button ToDoForm-button--add'>Add</button>
            </div>
        </form>
    )
}

export default ToDoForm