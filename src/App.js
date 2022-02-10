import { useReducer } from 'react';
import './App.css';

function App() {
  const initialTodos = [

  ]
  const reducer = (state, action) => {

  }

  function Todos() {
    const [todos, dispatch] = useReducer(reducer, initialTodos)
  }

  
  return (
    <ColorContext.Provider value={color}>
      <div className="App">
        Color is {color}
        <Component1 color={color} />
      </div>
    </ColorContext.Provider>
  );
}

export default App;