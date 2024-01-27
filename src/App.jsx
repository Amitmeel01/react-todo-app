import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./index.css";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/welcomeMsg";
import { useState } from "react";
function App() {

  const [todoItems , setTodoItems] = useState([
  //   {
  //   name:"milk",
  //   dueDate:"4/10/23",
  // },
  // {
  //   name:"Go to college",
  //   dueDate:"4/10/23",
  // },
  // {
  //   name:"sleep",
  //   dueDate:"recent",
  // },
]);

const handleNewItem = (itemName , itemDueDate)=>{
 const newTododItems=[...todoItems , 
  { name:itemName,
 dueDate:itemDueDate,}
];
setTodoItems(newTododItems);
};

const handleDeleteItem=(todoItemName)=>{

  const newTodoItem=todoItems.filter(item=>item.name != todoItemName);
  setTodoItems(newTodoItem);
  

}
  return (
    <center className="todo-container">
      
      <AppName />
      <AddTodo onItem={handleNewItem}/>
      {todoItems.length===0 &&  <WelcomeMsg todoItems={todoItems}/>}
     
      <TodoItems todoItems={todoItems} ondeleteclick={handleDeleteItem}/>
      
      
    </center>
  );
}
export default App;
