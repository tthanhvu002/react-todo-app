import {useRef, useState} from 'react'
export default function Todo({todo, index, handleFilter, handleToggle, handleDelete}){
    const todoRef = useRef()
    const [checked, setChecked] = useState(false)
    const inputRef = useRef()
    const handleEffect =() => {
        
        todoRef.current.classList.add('remove')
    }
    const handleBtn = (id) => {
        handleEffect()
        setTimeout(() => {
            handleDelete(id)
        }, 1000);
    }

    const handleCheckbox = (id) => {
        handleToggle(id)
        
    }
    
    //thoi gian tao todo
    const d = new Date()
    const time = d.toLocaleString();

    //random color 
    const colors = ['CDF0EA', 'F6C6EA', 'FAF4B7','FFE6E6']
    const i = Math.floor(Math.random() * colors.length);

    //dat id gan voi index -> sinh ra van de khi mang giam phan tu thi id se cap nhat lai -> dan den logic bi sai


    return (
        <li ref={todoRef} className={'todo-item ' +`${todo.complete ? 'strike ':""} ${colors[i]} `}    id={todo.id}> 
            <div className="todo-item-body">
                <input  type="checkbox" className="todo-checkbox" onClick={()=>handleCheckbox(todo.id)} ref={inputRef} id={todo.id} />

                <label> {todo.task} </label>
                <span className="todo-item-delete" onClick={() => handleBtn(todo.id)}> &#x2716; </span>
            </div>
            <div className="todo-item-info">
                <span className="time"> {time} </span>
            </div>
        </li>
    )
}