import { useLocalStorage } from "@/hooks/useLocalStorage";

export function BrowserTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Zmień motyw (zostanie po odświeżeniu!)
      </button>
      <div
        className={`h-[50px] w-full my-main transition-colors duration-300
           ${theme === "light" ? "bg-element-bg" : "bg-neutral-800"}`}
      ></div>
    </div>
  );
}
