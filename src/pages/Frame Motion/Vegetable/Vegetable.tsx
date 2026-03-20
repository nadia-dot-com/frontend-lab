import classes from './Vegetable.module.css'

export function Vegetable({
  vegetable,
  onClick,
}: {
  vegetable: string;
  onClick: () => void;
}) {
  return <div className={classes.vegetable} onClick={onClick}>{vegetable}</div>;
}
