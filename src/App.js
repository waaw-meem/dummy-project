import React, {useState} from "react";
import CreateTask from "./components/CreateTask";
import ShowList from "./components/ShowList";

function App(){
    const [todoLists,setTodoList] = useState([])

    const createTodoList = (title,assign) => {
        const updateTodoList = [
            ...todoLists,
            {
                id: Math.round(Math.random() * 9999),
               title,
               assign
            }
        ]
        setTodoList(updateTodoList)
    }

    return (
        <div>
            <ShowList todoLists={todoLists}/>
            <CreateTask onCreate={createTodoList}/>
        </div>
    )
}

export default App