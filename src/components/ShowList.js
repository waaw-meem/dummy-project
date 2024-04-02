import React from "react";
import ListItem from "./ListItem";

function ShowList({ todoLists }) {
  const renderedList = todoLists.map((todoList) => {
    return <div key={todoList.id}>
    <ListItem todoList={todoList} />
  </div>
  });

  return <div className="book-list">{renderedList}</div>;
}

export default ShowList;
