import ToDoCounter from './components/TodoCounter';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import CreateToDoButton from './components/CreateToDoButton';
import React from 'react'
import './App.css';

const todos = [
  { text: 'lavar ropa', done: false },
  { text: 'pasear al perro', done: true },
  { text: 'sacar la basura', done: false }
];

function App() {
  const [toDos, setToDos] = React.useState(todos)
  const [searchValue, setSearchValue] = React.useState('')

  const doneToDos = toDos.filter(todos => todos.done).length
  console.log(doneToDos)
  const totalToDos = toDos.length

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
        {todos.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            done={todo.done}
          />
        ))}
      </ToDoList>
      <CreateToDoButton/>
    </>
  )
}

export default App;