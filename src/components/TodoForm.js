import React from 'react'

class TodoForm extends React.Component {

    constructor(){
        super()
        this.state = {
            textInput: ''
        }
    }

    handleChanges = (e) => {
        this.setState({
            textInput: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleAdd(this.state.textInput);
        this.setState({
            textInput: ""
        })
    }


    render(){
        return(
        <form onSubmit = {this.handleSubmit}>
            <input
            value = {this.state.input}
            onChange = {this.handleChanges}
            type = 'text'
            name = 'item'
            >
            </input>
            <button>Add Task</button>
        </form>
        )
    }
}

export default TodoForm