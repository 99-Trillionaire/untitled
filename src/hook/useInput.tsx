import { ChangeEvent, useState } from "react";

const useInput = (initialValue: any) => {
  const [value, setter] = useState<typeof initialValue>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  return [value, onChange, setter];
};

export default useInput;
