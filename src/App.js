import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todo = [
    {
      task: '',
      id: '',
      completed: false
    }
  ];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {todo}
  }

  handleToggle = itemId => {
    this.setState({
      todo: this.state.todo.map(item => {
        if(itemId === item.id) {
          return({...item, completed: !item.completed})
        } else {
          return(item);
        }
      })
    })
  }

  handleAdd = task => {
    this.setState({
      todo:[...this.state.todo, {task: task, id: Date.now(), completed: false}]
    })
  }

  handleCompleted = task => {
    this.setState({
      todo: this.state.todo.filter(item=>(!item.completed))
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>To Do App</h1>
           <TodoForm handleAdd={this.handleAdd}/>
         </div>
        <TodoList handleCompleted={this.handleCompleted} todo={this.state.todo} handleToggle={this.handleToggle} />
       </div>
    );
  }
}

export default App;

