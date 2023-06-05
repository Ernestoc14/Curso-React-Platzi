function CreateToDoButton({setOpenModal}){
    return(
        <button className="bg-gray-700 text-white rounded-lg p-2 mt-10"
            onClick={
            () => {
                setOpenModal(openModal => !openModal)
            }} 
        >Add a New ToDo</button>
    )
}
export default CreateToDoButton;