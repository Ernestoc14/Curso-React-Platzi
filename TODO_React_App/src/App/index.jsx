import ToDoCounter from '../components/ToDoCounter.jsx';
import ToDoSearch from '../components/ToDoSearch.jsx';
import ToDoList from '../components/ToDoList.jsx';
import ToDoItem from '../components/ToDoItem.jsx';
import CreateToDoButton from '../components/CreateToDoButton.jsx';
import ToDosError from '../components/ToDosError.jsx';
import ToDosLoading from '../components/ToDosLoading.jsx';
import EmptyToDos from '../components/EmptyToDos.jsx';
import '../App/App.css';
import {ToDoContext}  from '../ToDoContext/ToDoContext.jsx';
import React from 'react';
// const todos = [
//   { text: 'Homeworks', done: false },
//   { text: 'Go for a walk', done: true },
//   { text: 'Take out the Trash', done: false },
// { text: 'Lava ca LOla', done: true },
//   { text: 'Tamara es alacni', done: false }
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(todos))

function App() {
  const {
    error,
    loading,
    searchedToDos,
    completeToDo,
    deleteToDo
  } = React.useContext(ToDoContext)

  return (
    <>
      <ToDoCounter />
      <ToDoSearch />

      <ToDoContext.Consumer>
        {() => (
          <ToDoList>
            {loading && <ToDosLoading />}
            {!loading && searchedToDos.length === 0 && <EmptyToDos />}
            {error && <ToDosError />}
            {searchedToDos.map(todo => (
              <ToDoItem
                key={todo.text}
                text={todo.text}
                done={todo.done}
                onComplete={() => completeToDo(todo.text)}
                onDelete={() => deleteToDo(todo.text)}
              />
            ))}
          </ToDoList>
        )}
      </ToDoContext.Consumer>
      <CreateToDoButton />
    </>
  )
}

export default App;