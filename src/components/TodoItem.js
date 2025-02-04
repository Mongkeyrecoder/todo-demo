import React from "react";
import { Col, Row } from "react-bootstrap";
import api from "../utils/api";

const TodoItem = ({ item, getTasks }) => {
  let col=item.isComplete===false?'':'gray';
  const deleteITEM = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`)
      if (response.status == 200) {
        getTasks()
      }
    } catch (err) {
      console.log('error',err)
    }

  }
  const 끝남안끝남=async(item)=>{
   const id=item._id;
   let isComplete=!item.isComplete;
   const response = await api.put(`/tasks/${id}`,{
      isComplete
   })
   if(response.status===200){
    getTasks()
   }
  }
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${col}`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button className="button-delete" onClick={(() => { deleteITEM(item._id) })}>삭제</button>
            <button className={`button-delete`} onClick={()=>{끝남안끝남(item)}}>{item.isComplete===false?"안끝남":"끝남"}</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
