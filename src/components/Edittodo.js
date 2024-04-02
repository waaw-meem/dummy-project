import React,{useState} from "react";

function Edittodo({todoList,onSubmit}){
    const [title,setTitle] = useState(todoList.title)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(todoList.id,title)
    }

    return (
        <div className="book-edit">
        <h3>Edit Todo</h3>
        <form onSubmit={handleSubmit} >
            <label>Add a title</label>
            <input className="input" value={title} onChange={handleChange}/>
            
            <button className="button">save</button>
        </form>
       </div>
    )
}

export default Edittodo