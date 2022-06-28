import React, {Component} from 'react'
import './App.css';

class TodoList extends Component {

  render () {
    const {todos, toggleTodo, deleteTodo} = this.props;
    return todos.map(
      (todo, index) => {
        return (
            <li  key={todo.title}>
    
              <span className={`title-tarea ${todo.completed ?
                "completed" : " "}`}>{todo.title}</span>
              <span role="img" area-aria-label="emoji" 
              className='icon-tarea' onClick={toggleTodo}
               data-index={index}>🆗</span>
              <span role="img" area-aria-label="emoji" 
              className='icon-tarea' onClick={deleteTodo}
               data-index={index}>❌</span>
            </li>
        )
      }
    )
  }
}

class App extends Component {
  state = {
    todos: [
      {title: "aprender JavaScript", completed: false},
      {title: "aprender CSS", completed: false},
      {title: "aprender React", completed: false}
    ],
    inputValue: " "
  }

 toggleTodo = (e) => {
  const index = e.target.getAttribute ("data-index")
  const todos = [...this.state.todos];
  const todo = {...todos[index]};
  todo.completed = !todo.completed;
  todos[index] = todo;
  this.setState({todos: todos})
 }

  deleteTodo= (e) => {
    const index = e.target.getAttribute ("data-index")
    console.log("borrar tarea", index)
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos: todos 
    })
  }


  submitHandler = (e) => {
    e.preventDefault();
    const newTodos = {
      title: this.state.inputValue,
      completed: false
    };
    this.setState({todos: [...this.state.todos, newTodos],
    inputValue: " "})
  }

  render () {

    return ( 
      <div className="App">
        <div className='container'>
        <h1 className='title'>
          Lista de tareas
          </h1>
          <ul>
          {<TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo} />}
          </ul>
          <form onSubmit={this.submitHandler}>
            <input 
            type="text" 
            placeholder='ingrese una nueva tarea'
            value={this.state.inputValue}
            onChange={e=> this.setState({inputValue: e.target.value})}
            ></input>
            <button><span role="img" area-aria-label="emoji">➕</span></button>
          </form>
          
        </div>
        </div>
        
    );
  }
}

export default App;

