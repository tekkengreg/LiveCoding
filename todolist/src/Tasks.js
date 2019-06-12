import React from "react";
import { connect } from "react-redux";

const Tasks = ({ filter, tasks }) => {
  return (
    <div>
      {tasks
        .filter(task => {
          switch (filter) {
            case "SHOW_ALL":
              return true;
            case "SHOW_DONE":
              return task.isDone;
            case "SHOW_TODO":
              return !task.isDone;
            default:
              return false;
          }
        })
        .map(task => (
          <div>
            <input
              type="checkbox"
              id="scales"
              name="scales"
              checked={task.isDone}
            />
            <label for="scales">{task.name}</label>
          </div>
        ))}
    </div>
  );
};

const mstp = ({ filter, tasks }) => ({ filter, tasks });

export default connect(mstp)(Tasks);
