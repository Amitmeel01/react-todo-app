import Todoitem from "./Todoitem";
const  TodoItems=({todoItems,ondeleteclick})=>{
return(
  <div className="items-container">
    {todoItems.map(item=> <Todoitem 
    key={item.name}
    todoDate={item.dueDate} todoName={item.name} ondeleteclick={ondeleteclick}/>)}
  </div>
);
};

export default TodoItems;