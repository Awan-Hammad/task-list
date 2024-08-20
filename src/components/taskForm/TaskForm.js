import React from "react";
import { setArrayInLocalHost } from "../../App";

const TaskForm = (props) => {
  const { inputField, setInputField, taskField, setTaskField } = props;
  // console.log(props, "props");

  const inputFieldChangeHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.value, "working");
    setInputField(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(inputField);
    if (!inputField?.trim()) {
      alert("Please Fill The Input Field!");
      return;
    }
  const taskFieldTemp = [...taskField];
  taskFieldTemp.push(inputField);
  // console.log(taskFieldTemp);
  setArrayInLocalHost(taskFieldTemp);
  setTaskField(taskFieldTemp);
  setInputField("");
};


  return (
    <form id="task-form" onSubmit={formSubmitHandler}>
      <div className="row">
        <div className="input-field col s12">
          <input
            type="text"
            name="task"
            id="task"
            onChange={inputFieldChangeHandler}
            value={inputField}
          />
          <label>New Task</label>
        </div>
      </div>
      <input type="submit" value="Add Task" className="btn" />
    </form>
  );
};

export default TaskForm;
