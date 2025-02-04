import React from "react";
import TodoItem from "./TodoItem"
const TodoBoard = ({todoList,getTasks}) => {
  console.log(todoList)
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length>0? todoList.map((item,i)=>{
        return <TodoItem getTasks={getTasks} key={i} item={item}/>
      }):""}
      {/* <TodoItem/> will be here once we get the todoList */}
      <h2>There is no Item to show</h2>
    </div>
  );
};

export default TodoBoard;
