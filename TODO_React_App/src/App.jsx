import ToDoCounter from './components/TodoCounter';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import CreateToDoButton from './components/CreateToDoButton';
import './App.css';

const todos = [
  { text: 'lavar ropa', done: false },
  { text: 'pasear al perro', done: true },
  { text: 'sacar la basura', done: false }
];

function App() {
  return (
    <>
      <ToDoCounter done="3" left="8" />
      <ToDoSearch />
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