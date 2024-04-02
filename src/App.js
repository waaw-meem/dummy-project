import React, { useState } from "react";
import CreateTask from "./components/CreateTask";
import ShowList from "./components/ShowList";

function App() {
    // Declaring List of Item or project with empty array
    const [todoLists, setTodoList] = useState([]);

    // Create List function
    const createTodoList = (title, assign) => {
        const updatedTodoList = [
            ...todoLists,
            {
                id: Math.round(Math.random() * 9999),
                title,
                assign
            }
        ];
        setTodoList(updatedTodoList);
    };
  
    // Edit list
    const editTodoList = (id, newTitle, newAssign) => {
        const updatedTodoList = todoLists.map((todoList) => {
            if (todoList.id === id) {
                return {
                    ...todoList,
                    title: newTitle,
                    assign: newAssign
                };
            }
            return todoList;
        });
        setTodoList(updatedTodoList);
    };


    const deleteTodo = (id) => {
        const updatedTodoList = todoLists.filter((todoList) => {
            return todoList.id !== id
        })
        setTodoList(updatedTodoList)
    }


    return (
        <div>
            <ShowList
                todoLists={todoLists}
                onEdit={editTodoList}
                onDelete={deleteTodo}
            />
            <CreateTask onCreate={createTodoList} />
        </div>
    );
}

export default App;
