import { useEffect, useState } from "react";

const useLocalStorage = (key, initalValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initalValue;
    } catch (err) {
      console.log(err);
      return initalValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;

/**
 *
 * this customhook's key is "react-todo.tasks" and we also passed in an empty array.
 * it's using a useState to try to look for the key and see if there's any value in it.
 * if there is, parse the localvalue otherwise return the initalvalue
 *
 * now in the useEffect, it is setting the localStorage to the key with whatever value
 * has been returned from the useState.
 */
