import PropTypes from "prop-types";

// styles will ve scoped for this component and not global
import styles from "./TaskList.module.css";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id) //last item adde will be on top
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.any,
  deleteTask: PropTypes.any,
  toggleTask: PropTypes.any,
  enterEditMode: PropTypes.any,
};
