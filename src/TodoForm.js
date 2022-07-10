import { useState, useRef } from "react";
export default function TodoForm({todos,setTodos, setTotalTask}){
    const inputRef = useRef()
    const [value, setValue] = useState('')
    const handleSubmit = () => {
        if(inputRef.current.value != ''){
            addTask(value)
            if(localStorage.totalTask){
                localStorage.totalTask = JSON.stringify(parseInt(localStorage.totalTask) + 1)
            } else{
                localStorage.totalTask = JSON.stringify(parseInt(1))
            }
            setTotalTask(prevState => prevState +1)
        }
        
    }
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            handleSubmit()
        }
      }
    const addTask = (value) => {
        let copy = [...todos]
        copy = [...copy, {id: todos.length+1, task: value, complete: false}]
        localStorage.todos = JSON.stringify(copy)

        setTodos(copy)
        setValue('')
        inputRef.current.focus()
    }
    return (
        <div className="add-todo-wrap">
          <input type="text" className="todo-input" placeholder="Todo..." value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef}  onKeyPress={(e) => handleKeyPress(e)} />
          <button className="submit" onClick={handleSubmit} >Add</button>

        </div>
    )
}