import React, {Component} from 'react'
import './App.css';


class App extends Component {
  state = {
    todoTitle: "Aprender JavaScript"
  }

  handleClick = () => {
    this.setState({todoTitle: "Aprender HTML"})
  }

  render () {
    return ( 
      <div className="App">
        <div className='container'>
        <h1 className='title'>
          Lista de tareas
          </h1>
          <ul>
            <li className='title-tarea'>

            {this.state.todoTitle}
              <span role="img" area-aria-label="emoji" className='icon-tarea' onClick={this.handleClick}>🆗</span>
              <span role="img" area-aria-label="emoji" className='icon-tarea'>❌</span>
            </li>
            <li className='title-tarea'>
            Aprender CSS
              <span role="img" area-aria-label="emoji" className='icon-tarea' onClick={this.handleClick}>🆗</span>
              <span role="img" area-aria-label="emoji" className='icon-tarea'>❌</span>
            </li>
            <li className='title-tarea'>

            Aprender React
              <span role="img" area-aria-label="emoji" className='icon-tarea' onClick={this.handleClick}>🆗</span>
              <span role="img" area-aria-label="emoji" className='icon-tarea'>❌</span>
            </li>
          </ul>
          <form>
            <input type="text" placeholder='ingrese una nueva tarea'></input>
            <button><span role="img" area-aria-label="emoji">➕</span></button>
          </form>
          
        </div>
        </div>
        
    );
  }
}

export default App;



//lista de tareas
//boton de marcar ok
//boton de eliminar 
//caja de texto
//boton de agregar