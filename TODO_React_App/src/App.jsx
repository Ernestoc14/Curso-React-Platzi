import ToDoCounter from './components/TodoCounter';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import CreateToDoButton from './components/CreateToDoButton';
import React from 'react'
import './App.css';

const todos = [
  { text: 'Homeworks', done: false },
  { text: 'Go for a walk', done: true },
  { text: 'Take out the Trash', done: false }
];

function App() {
  const [toDos, setToDos] = React.useState(todos)
  const [searchValue, setSearchValue] = React.useState('')

  const doneToDos = toDos.filter(todos => todos.done).length
  const totalToDos = toDos.length

  const searchedToDos = toDos.filter(
    (todo) => {
      const toDoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return toDoText.includes(searchText)
    }
  )

  const completeToDo = (text) => {
    const newtodos = [...todos]
    const toDoIndex = newtodos.findIndex(todo => todo.text === text)
    newtodos[toDoIndex].done = true
    setToDos(newtodos)
  }
  
  const deleteToDo = (text) => {
    const newtodos = [...todos]
    const toDoIndex = newtodos.findIndex(todo => todo.text === text)
    newtodos.splice(toDoIndex, 1)
    setToDos(newtodos)
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