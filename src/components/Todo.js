
function Todo({ index, singleTodoItem, app_update_CurrTodoItemToList, app_delete_CurrTodoItemFromList }) {
    return (
        <div className="todo"style={{ textDecoration: singleTodoItem.isCompleted ? "line-through" : "" }}>
            
            {singleTodoItem.task}-<b>{singleTodoItem.isCompleted?"DONE":"WORKING"}</b>
        
            <div>
                <button onClick={() => app_update_CurrTodoItemToList(index)}>Complete</button>
                <button onClick={() => app_delete_CurrTodoItemFromList(index)}>x</button>
            </div>
      </div>
    );
  };

/* function Todo({ singleTodoItem }) {
    return (
      <div className="todo">
        {singleTodoItem.task}
      </div>
    );
  }; */

  export default Todo;