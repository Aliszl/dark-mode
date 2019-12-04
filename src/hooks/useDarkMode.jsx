import { useState } from "react";
export const useDarkmode = initialMode => {
  const [mode, setMode] = useState(initialMode);
  const handleChanges = updatedMode => {
    setMode(updatedMode);
  };
  return [mode, setMode, handleChanges];
};
