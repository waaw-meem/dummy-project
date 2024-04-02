import React,{useState} from "react";
import Edittodo from "./Edittodo";

function ListItem({todoList,onEdit,onDelete}){
    const [showEdit,setShowEdit] = useState(false)

    const handleClick = () => {
        onDelete(todoList.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id,title) => {
        setShowEdit(false)
        onEdit(id,title)
    }

    let content = <h3>{todoList.title}</h3>
    if(showEdit){
        content = <Edittodo onSubmit={handleSubmit} todoList={todoList}/>
    }

    return (
        <div className="book-show">
        {content}
        <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleClick}>Delete</button>
        </div>
        </div>
    )
}

export default ListItem