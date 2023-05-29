import ToDoCounter from './components/TodoCounter';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import CreateToDoButton from './components/CreateToDoButton';
import React from 'react'
import './App.css';

// const todos = [
//   { text: 'Homeworks', done: false },
//   { text: 'Go for a walk', done: true },
//   { text: 'Take out the Trash', done: false }
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(todos))

// Custom Hook to use LocalStorage
function useLocalStorage(itemName, initialValue){
  const localStorageItems = localStorage.getItem(itemName)
  let parsedItems

  // If there is no item in the localStorage, we set the initial value
  if(!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItems = initialValue
  }else{
    // If there is an item in the localStorage, we parse it
    parsedItems = JSON.parse(localStorageItems)
  }

  const [item, setItem] = React.useState(parsedItems)
  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItem(newItems)
  }
  return [item, saveItem]
}

function App() {
  const [toDos, saveToDos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')

  const doneToDos = toDos.filter(todo => todo.done).length
  const totalToDos = toDos.length

  const searchedToDos = toDos.filter(
    (todo) => {
      const toDoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return toDoText.includes(searchText)
    }
  )

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
    <>
      <ToDoCounter 
        done={doneToDos} 
        left={totalToDos}
      />
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {searchedToDos.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            done={todo.done}
            onComplete={()=>completeToDo(todo.text)}
            onDelete={()=>deleteToDo(todo.text)}
          />
        ))}
      </ToDoList>
      <CreateToDoButton/>
    </>
  )
}

export default App;