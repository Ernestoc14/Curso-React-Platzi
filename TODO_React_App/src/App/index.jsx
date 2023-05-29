import ToDoCounter from '../components/ToDoCounter.jsx';
import ToDoSearch from '../components/ToDoSearch.jsx';
import ToDoList from '../components/ToDoList.jsx';
import ToDoItem from '../components/ToDoItem.jsx';
import CreateToDoButton from '../components/CreateToDoButton.jsx';
import useLocalStorage from '../App/useLocalStorage.jsx';
import '../App/App.css';
import React from 'react'

// const todos = [
//   { text: 'Homeworks', done: false },
//   { text: 'Go for a walk', done: true },
//   { text: 'Take out the Trash', done: false }
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(todos))

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