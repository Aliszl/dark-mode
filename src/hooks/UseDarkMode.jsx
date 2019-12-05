import { useEffect } from "react";
import { useLocalStorage } from "./UseLocalStorage";

export const useDarkMode = (key, initialMode) => {
  // var theParsedObj = localStorage.getItem(key)

  const [darkMode, setDarkMode] = useLocalStorage(key, initialMode);

  // const [darkMode, setDarkMode] = useState(initialMode);
  // const handleChanges = updatedMode => {
  //   setDarkMode(!updatedMode);
  // };
  useEffect(() => {
    if (darkMode === true) {
      return document.querySelector("body").classList.add("dark-mode");
    } else {
      return document.querySelector("body").classList.remove("dark-mode");
    }
  });
  return [darkMode, setDarkMode];
};
