import React from "react";
import { TaskListItem } from "./TaskListItem";

const TaskList = (props) => {
  const { taskField, deleteTaskBtn } = props;
  return (
    <ul className="collection">
      {taskField?.map((data, index) => {
        return (
          <TaskListItem name={data} key={index} deleteTaskBtn={deleteTaskBtn} index={index}/>
        );
      })}
    </ul>
  );
};

export default TaskList;
