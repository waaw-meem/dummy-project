import React from "react";

function ListItem({todoList}){
    return (
        <div className="book-show">
        <p>{todoList.title}</p>
        <p>{todoList.assign}</p>
        </div>
    )
}

export default ListItem