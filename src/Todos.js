import Todo from "./Todo"
import { useRef } from "react"
export default function Todos({todos, handleFilter, handleToggle, handleDelete}){
    return(
        <ul className="todo-list" role="list"  aria-labelledby="list-heading">
          <h2>Todo list</h2>
          {
            todos.map((item,index) => {
              return (
                <Todo  todo={item} index = {index} handleFilter={handleFilter} handleToggle={handleToggle} handleDelete={handleDelete}></Todo>
              )
            })
          }
          <button onClick={handleFilter}>Clear</button>

        </ul>
    )
}