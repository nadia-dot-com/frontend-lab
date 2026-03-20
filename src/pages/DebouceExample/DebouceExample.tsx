import { useCallback, useEffect, useState } from "react";

import classes from "./DebouceExample.module.scss";
import { myDebounce } from "../../utility/lodash/myDebounce";
import { Wrapper } from "../../components/Wrapper/Wrapper";

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

    debounceValidation(value);
  }, [value, debounceValidation]);

  return (
    <Wrapper>
      <input
        className={classes.input}
        placeholder="Write 4 letters"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={classes.note}>{error ? "Write min 4 letters" : null}</div>
    </Wrapper>
  );
}
