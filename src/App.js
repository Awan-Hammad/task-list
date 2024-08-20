import React from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/taskList/TaskList";
import { useState } from "react";
import { useEffect } from "react";

const localStorageKey = "Task";
export const setArrayInLocalHost = (array) => {
  localStorage.setItem(localStorageKey, JSON.stringify(array));
};

export const getArrayInLocalHost = () => {
  return JSON.parse(localStorage.getItem(localStorageKey));
};

function App() {
  const [inputField, setInputField] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [taskField, setTaskField] = useState([]);
 

  useEffect(() => {
    const getTaskListFromLocalStorage = getArrayInLocalHost();
    setTaskField(getTaskListFromLocalStorage);
  }, []);

  const clearTaskBtn = (event) => {
    event.preventDefault();
    if (window.confirm("Are you Sure??")) {
      setArrayInLocalHost([]);
      setTaskField([]);
    }
  };
  const deleteTaskBtn = (index) => {
    // console.log(index, "click is working");
    if (window.confirm("Are you Sure You want to delete this?")) {
      const tepmList = [...taskField];
      tepmList.splice(index, 1);
      setArrayInLocalHost(tepmList);
      setTaskField(tepmList);
    }
  };
  const filterInputHandler = (event) => {
    event.preventDefault();
    setFilterInput(event.target.value);
  };
  // console.log(filterInput, "filter input");

 const filterInputTemp = taskField?.filter(singleData => singleData.toLowerCase().includes(filterInput));
  
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div id="main" className="card">
            <div className="card-content">
              <span className="card-title">Task List</span>
              <TaskForm
                inputField={inputField}
                setInputField={setInputField}
                taskField={taskField}
                setTaskField={setTaskField}
              />
            </div>
            <div className="card-action">
              <h5 id="task-title">Tasks</h5>
              <div className="input-field col s12">
                <input
                  type="text"
                  name="filter"
                  id="filter"
                  value={filterInput}
                  onChange={filterInputHandler}
                />
                <label>Filter Task</label>
                <TaskList
                  taskField={filterInputTemp}
                  deleteTaskBtn={deleteTaskBtn}
                />
              </div>
              <a className="clear-tasks btn black" onClick={clearTaskBtn}>
                Clear Tasks
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
