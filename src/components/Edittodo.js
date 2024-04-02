import React, {useState} from "react";
import CreateTask from "./components/CreateTask";

function App(){
    const [todoList,setTodoList] = useState([])

    const createTodoList = (title,assign) => {
        const updateTodoList = [
            ...todoList,
            {
                id:Math.random() * todoList.length,
                title,
                assign
            }
        ]
        setTodoList(updateTodoList)
    }

    return (
        <div>
            
            <CreateTask onCreate={createTodoList}/>
        </div>
    )
}

export default App