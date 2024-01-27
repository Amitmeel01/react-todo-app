import { MdDelete } from "react-icons/md";
export default function Todoitem({ todoName, todoDate, ondeleteclick }) {

  return (
    <div>
      <div className="row">
        <div className="col-6" style={{ fontWeight: "bold"}} >{todoName}</div>
        <div className="col-4" style={{ fontWeight: "bold" }}>{todoDate}</div>
        <div className="col-2"><button type="button" className="btn btn-danger"
        onClick={() => ondeleteclick(todoName)}><MdDelete /></button></div>
      </div>
    </div>
  );
}