import { useEffect, useRef, useState } from "react";
import classes from "./FormExercise.module.css";

const IMPORTANCE = {
  damaged: "Damaged",
  wrongItem: "Wrong Item",
  other: "Other",
};

type Status = "idle" | "loading" | "success" | "error";

function useFormManager(url: string) {
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataToSend = {
      orderID: formData.get("orderID"),
      email: formData.get("email"),
      reason: formData.get("reason") || null,
      description: formData.get("description") || null,
    };

    setStatus("loading");
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!res.ok) {
        throw new Error("Error to fetch");
      }
      setStatus("success");
    } catch (e) {
      setStatus("error");
      console.log(e);
    }
  };

  return { submit, status, setStatus };
}

export function FormExercise() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { submit, status, setStatus } = useFormManager(
    "https://jsonplaceholder.typicode.com/posts",
  );

  useEffect(() => {
    if (status !== "success") return;
    const timerId = setTimeout(() => setStatus("idle"), 3000);
    if (formRef.current) formRef.current.reset();

    return () => clearTimeout(timerId);
  }, [status]);

  return (
    <div className={classes.container}>
      <h2>Send request</h2>
      <form className={classes.form} ref={formRef} onSubmit={(e) => submit(e)}>
        <div>
          <label>Order ID</label>
          <input
            className={classes.input}
            type="text"
            name="orderID"
            placeholder="Write order ID"
            pattern="^[a-zA-Z]{2}[0-9]{4}$"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            className={classes.input}
            type="text"
            name="email"
            placeholder="Write Email"
            required
          />
        </div>
        <div>
          <label>Reason</label>
          <select name="reason" defaultValue={""}>
            <option value="" disabled>
              Select importance
            </option>
            {Object.values(IMPORTANCE).map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" placeholder="Write note"></textarea>
        </div>
        <div className={classes.containerButton}>
          <button disabled={status === "loading"}>
            {status === "loading" ? "Loading" : "Send"}
          </button>
        </div>
        <div>
          {(status === "success" && "Sended succesfully") ||
            (status === "error" && "Some thing went wrong.. Try again later!")}
        </div>
      </form>
    </div>
  );
}
