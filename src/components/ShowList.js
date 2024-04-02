import React from "react";
import ListItem from "./ListItem";

function ShowList({ todoLists,onEdit,onDelete }) {
  const renderedList = todoLists.map((todoList) => {
    return <div key={todoList.id}>
    <ListItem todoList={todoList} onEdit={onEdit} onDelete={onDelete}/>
  </div>
  });

  return <div className="book-list">{renderedList}</div>;
}

export default ShowList;
