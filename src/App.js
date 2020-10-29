import React from 'react';
import './App.css';

import Todo from '../src/components/Todo'
import TodoAdd from '../src/components/TodoAdd'

function App() {

  const [us_todolist, us_setTodos] = React.useState([
    {
      task: "Learn about React",
      isCompleted: false
    },
    {
      task: "Meet friend for lunch",
      isCompleted: false
    },
    {
      task: "Pick items from HomeDepot",
      isCompleted: false
    }
  ]);

  const APP_add_NewTodoItemToList = (task) => {
    const newTodos = [...us_todolist, { task }];
    us_setTodos(newTodos);
  };

  const APP_update_CurrTodoItemToList = (index) => {
    const newTodos = [...us_todolist];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;

    us_setTodos(newTodos);
  };

  const APP_delete_CurrTodoItemFromList = (index) => {
    const newTodos = [...us_todolist];
    newTodos.splice(index, 1);

    us_setTodos(newTodos);
  };

  return (
            <div className="app">

              <div className="todo-list">
                {
                  //By using the JavaScript method, map(), you will be able to create a new array of items 
                  //by mapping over the todos list from state 
                  //and displaying them each todo by index.
                  us_todolist.map((eachtodoitem, index) => (
                                              <Todo
                                                key={index}
                                                index={index}
                                                singleTodoItem={eachtodoitem}
                                                app_update_CurrTodoItemToList={APP_update_CurrTodoItemToList}
                                                app_delete_CurrTodoItemFromList={APP_delete_CurrTodoItemFromList}
                                              />
                                            ))                                     
                }

              <TodoAdd app_func_AddNewTodoItemToList={APP_add_NewTodoItemToList} />

            </div>

          </div>
         );
}

export default App;
