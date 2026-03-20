import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <ul className={classes.contacts}>
        <li>
          <a href={`tel:+48111111111`}>+48 111 111 111</a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            ul. Jana Pawła II 10, Kraków
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
      </ul>

      <div className={classes.rights}>All rools reserved &copy;</div>
    </footer>
  );
}
