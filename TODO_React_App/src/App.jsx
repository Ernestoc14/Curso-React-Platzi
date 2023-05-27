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
            onComplete={completeToDo}
          />
        ))}
      </ToDoList>
      <CreateToDoButton/>
    </>
  )
}

export default App;