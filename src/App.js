import React, { useState } from 'react';
import TodoForm from './pages/TodoForm.jsx';
import TodoList from './pages/TodoList.jsx';
import './App.css';
import Home from './pages/Home.jsx';
import Sign_up from './pages/Sign_up.jsx';
import Login from './pages/Login.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import FoodApp from './pages/FoodApp.jsx';
import Indian from './pages/Indian.jsx';


function App() {
  // const [todos, setTodos] = useState([]);

  // const addTodo = (text) => {
  //   setTodos([...todos, { text, completed: false }]);
  // };

  // const toggleTodo = (index) => {
  //   const newTodos = todos.slice();
  //   newTodos[index].completed = !newTodos[index].completed;
  //   setTodos(newTodos);
  // };

  // const removeTodo = (index) => {
  //   setTodos(todos.filter((_, i) => i !== index));
  // };

  return (
    <div className="App">
      {/* <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} /> */}
      {/* <Home/> */}
      {/* <Sign_up/> */}
      {/* <Login/> */}
      <BrowserRouter>
      <Routes>
     <Route path="/home" element={<FoodApp/>} />
       <Route path="/signup" element={<Sign_up/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/indian" element={<Indian/>}/>
      </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
