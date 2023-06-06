import React from 'react';
import useLocalStorage from './useLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider({ children}) {
    const {
        item: toDos,
        saveItem: saveToDos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)

    const doneToDos = toDos.filter(todo => todo.done).length
    const totalToDos = toDos.length

    const searchedToDos = toDos.filter(
        (todo) => {
            const toDoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return toDoText.includes(searchText)
        }
    )

    const addToDo = (text) => {
        const newtodos = [...toDos]
        newtodos.push({
            text, 
            done: false})
        saveToDos(newtodos)
    }

    const completeToDo = (text) => {
        const newtodos = [...toDos]
        const toDoIndex = newtodos.findIndex(todo => todo.text === text)
        newtodos[toDoIndex].done = true
        saveToDos(newtodos)
    }

    const deleteToDo = (text) => {
        const newtodos = [...toDos]
        const toDoIndex = newtodos.findIndex(todo => todo.text === text)
        newtodos.splice(toDoIndex, 1)
        saveToDos(newtodos)
    }

    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            totalToDos,
            doneToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,
            addToDo,
        }}>
            {children}
        </ToDoContext.Provider>
    )
}
export { ToDoContext, ToDoProvider}