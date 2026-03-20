import { useCallback, useEffect, useState } from "react";

import classes from "./DebouceExample.module.css";
import { myDebounce } from "../../../utility/lodash/myDebounce";

export function DebouceExample() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const debounceValidation = useCallback(
      myDebounce((currentValue: string) => {
          setError(currentValue.length < 4);
      }, 2000),
    [],
  );

  useEffect(() => {
    if (!value) return;
    if (value.length >= 4) {
      setError(false);
    }

   debounceValidation(value)

    // const timerId = setTimeout(() => {
    //   if (value.length >= 4) {
    //     return;
    //   } else {
    //     setError(true);
    //   }
    // }, 3000);
    // return () => clearTimeout(timerId);
  }, [value, debounceValidation]);

  return (
    <>
      <input
        className={classes.input}
        placeholder="Write 4 letters"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={classes.note}>{error ? "Write min 4 letters" : null}</div>
    </>
  );
}
