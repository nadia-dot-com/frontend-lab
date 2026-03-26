import { useLocalStorage } from "@/hooks/useLocalStorage";
import classes from "./BrowserTheme.module.scss";

export function BrowserTheme() {
const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Zmień motyw (zostanie po odświeżeniu!)
      </button>
      <div className={`${classes.container} ${theme === "light" ? classes.light : classes.dark}`}></div>
    </div>
  );
}