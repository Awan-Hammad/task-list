import React from "react";

export const TaskListItem = ({name,deleteTaskBtn,index}) => {
  
  return (
    <li className="collection-item">
      {name}
      <a href="#" className="delete-item secondary-content">
        <i className="fa fa-remove" onClick={() => deleteTaskBtn(index)} ></i>
      </a>
    </li>
  );
};
