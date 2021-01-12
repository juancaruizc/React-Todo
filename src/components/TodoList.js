import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {

        return(
            <div className = 'todo-list'>
                {
                    props.todo.map((item) => (
                        <Todo key = {item.id} item = {item} handleToggle = {props.handleToggle} />
                    ))  
                }
                <button onClick = {props.handleCompleted} className = 'clear-button'>Clear Task</button>
            </div>
        )
    
}

export default TodoList