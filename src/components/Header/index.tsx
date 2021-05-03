import { useStyles } from "./styles";

export function Header() {
  const styles = useStyles();

  return (
    <header className={styles.app}>
      <h1 className={styles.title}>SWAPI | Star Wars API</h1>
    </header>
  );
}
