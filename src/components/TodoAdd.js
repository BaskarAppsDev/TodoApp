import React from 'react';

function TodoAdd({ app_func_AddNewTodoItemToList }) {

    const [value, setValue] = React.useState("");
  
   
    const handleSubmit = e => {
     e.preventDefault();
     
      if (!value) return;

      app_func_AddNewTodoItemToList(value);

      setValue("");
    };
  

    return (
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />

      </form>
    );
  }
  
  export default TodoAdd;