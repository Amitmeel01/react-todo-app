import { useState } from "react";

function AddTodo({ onItem }) {

  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  

  let handleNameChange = (event) => {
    setTodoName(event.target.value);
    
  }

  let handleDateChange = (event) => {
    setTodoDate(event.target.value);
    
  }

  let handleButtonClicked = () => {
    if(todoName.length!=0 && todoDate.length!=0){
      onItem(todoName, todoDate);
      setTodoDate("");
      setTodoName("");
    }
   
  }
  return (
    <div classNameName="container">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo here" value={todoName} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2"><button type="button" className="btn btn-success" onClick={handleButtonClicked}>Add</button></div>
      </div>
    </div>
  );
}
export default AddTodo;