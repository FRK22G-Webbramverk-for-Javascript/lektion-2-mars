import './App.css'

import TodoItem from './components/TodoItem/TodoItem'
import AddTodo from './components/AddTodo/AddTodo'

function App() {

  return (
    <div className="App">
      <ul className='todos'>
        <TodoItem todo="Köp kaffe" done={true} />
        <TodoItem todo="Köp kaka" done={false} />
        <TodoItem todo="Brygg kaffe" done={false} />
        <TodoItem todo="Drick kaffe" done={false} />
      </ul>
      <AddTodo />
    </div>
  )
}

export default App
