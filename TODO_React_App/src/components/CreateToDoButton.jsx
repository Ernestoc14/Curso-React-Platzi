function CreateToDoButton(){
    return(
        <button className="bg-gray-700 text-white rounded-lg p-2 mt-10"
            onClick={
            (event) => {
                console.log(event.target)
            }} 
        >Add a New ToDo</button>
    )
}
export default CreateToDoButton;