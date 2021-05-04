import { useStore } from "stores";
import { Search } from "./Search";

import { useStyles } from "./styles";

export function Home() {
  const styles = useStyles();
  const { swapi } = useStore();

  return (
    <div className={styles.home}>
      <Search />
    </div>
  );
}
