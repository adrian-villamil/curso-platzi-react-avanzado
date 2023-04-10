import { useState } from "react";

export const useInputs = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => setValue(event.target.value);

  return { value, onChange };
};