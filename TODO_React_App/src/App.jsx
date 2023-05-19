import ToDoCounter from '../components/TodoCounter';
import ToDoSearch from '../components/ToDoSearch';
import ToDoList from '../components/ToDoList';
import ToDoItem from '../components/ToDoItem';
import CreateToDoButton from '../components/CreateToDoButton';
import './App.css';

function App(){
  return(
    <div>
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
        <ToDoItem/>
        <ToDoItem/>
      </ToDoList>
      <CreateToDoButton/>
    </div>
  )
}

export default App;