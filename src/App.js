import {useState, useEffect, useRef} from 'react'
import './App.css';
import img from './undraw_designer_re_5v95.svg'
import Todos from './Todos';
import TodoForm from './TodoForm';
import Analys from './Analys';
function App() {

  const [completeTask, setCompleteTask] = useState(0)
  const [totalTask, setTotalTask] = useState(0)
  
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    if(localStorage.todos){
      setTodos(JSON.parse(localStorage.todos))

    }
    if(localStorage.totalTask){
      setTotalTask(JSON.parse(localStorage.totalTask))
    }
    if(localStorage.completeTask){
      setCompleteTask(JSON.parse(localStorage.completeTask))
    }
    
  },[])

  //cap nhap lai trang thai complete sau khi nhan checkbox
  const handleToggle= (id) => {

    let newList = todos.map(todo => {
      return todo.id == id ? { ...todo, complete: !todo.complete } : { ...todo};
      

    })
    console.log(newList);  
    setTodos(newList)
  }
  
  const handleDelete = (id) => {
    let newList = todos.filter(todo => todo.id != id)
    if(newList.lenght > 0){
      localStorage.totalTask = JSON.stringify(newList.length)

      setTotalTask(newList.length)

    } else{
      localStorage.totalTask = JSON.stringify(totalTask - 1)

      setTotalTask(prevState => prevState - 1)
    }
    localStorage.todos = JSON.stringify(newList)

    setTodos(newList)
  }
 
  //xoa nhung todo da hoan thanh
  const handleFilter = () =>{
    let newList = todos.filter(todo => {
      return !todo.complete //lay ra nhung todo co complete = true vi !true = false
    })
    let completedTask = todos.length - newList.length
    setCompleteTask(prevState => prevState + completedTask) //cong so task da hoan thanh vao
    localStorage.todos = JSON.stringify(newList)
    localStorage.completeTask = JSON.stringify(completeTask+completedTask)
    setTodos(newList)
  }
  

  
  return (
    <div className="App">
      <div className="todo-wrapper">
        <h1 className="todo-heading">
          Todo App
        </h1>
        <h2>What need to be done?</h2>
        <TodoForm setTodos={setTodos} todos ={todos} setTotalTask={setTotalTask}></TodoForm>
        <div className="d-flex align-items-center todo-app-body">
          <Todos todos = {todos} handleFilter={handleFilter} handleToggle={handleToggle} handleDelete={handleDelete}></Todos>
          <img src={img} alt="" />
          <Analys props={[completeTask, totalTask]}></Analys>
        </div>
      </div>
    </div>
  );
}

export default App;
