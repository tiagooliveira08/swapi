import { useStyles } from "./styles";

export function Header() {
  const styles = useStyles();

  return <header className={styles.app}>header</header>;
}
