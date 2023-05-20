import searchIcon from '../assets/search-icon.svg';

function ToDoSearch(){
    return(
        <div className='flex justify-center relative'>
            <input 
                placeholder="Search a Task" 
                className="border-solid border 2 rounded-2xl border-gray-500 w-1/2 pl-2 pt-1 pb-1 mb-20"
            />
            <img src={searchIcon} alt="search-icon" className='w-6 h-6 absolute mt-1 ml-[560px]' />
        </div>
        )
}
export default ToDoSearch;