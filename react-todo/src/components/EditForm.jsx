import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const EditForm = ({ editedTask, updateTaskFn, closeEditMode }) => {
  /**
   * editedTask is a single task name that will be edited
   * tasks is the array of the tasks.
   *
   * in order to update the edited task,
   * setUpdatedTAskName, will update when user types an input on the edit task form.
   * when the user submits, name stored in variable updatedTaskName will
   * update the task.name where task.id matches in updateTaskFn function
   *
   * it will update the entire task by passing in an entire edited task
   * with whatever it was with a new name to it.
   * */
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTaskFn({ ...editedTask, name: updatedTaskName });
  };

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
};

EditForm.propTypes = {
  editedTask: PropTypes.any,
  updateTaskFn: PropTypes.any,
  closeEditMode: PropTypes.any,
};
