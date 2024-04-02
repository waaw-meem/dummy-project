import React, { useState } from "react";

function CreateTask({ onCreate }) {
    const [title, setTitle] = useState([]);
    const [assign, setAssign] = useState([]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value); 
    };

    const handleAssigneeChange = (event) => {
        setAssign(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onCreate( title, assign );
        setTitle("");
        setAssign("");
    };

    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <input
                className="input"
                    type="text"
                    value={title}
                    placeholder="Enter title of the project"
                    onChange={handleTitleChange}
                />
                <input
                className="input"
                    type="text"
                    value={assign}
                    placeholder="Enter task assignee"
                    onChange={handleAssigneeChange}
                />
                <button type="submit" className="button">Create Task</button>
            </form>
        </div>
    );
}

export default CreateTask;
