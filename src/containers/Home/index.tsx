import { useStore } from "stores";
import { Search } from "./Search";
import { CardStarship } from "./CardStarship";

import { useStyles } from "./styles";

export function Home() {
  const { swapi } = useStore();

  const styles = useStyles();

  return (
    <div className={styles.home}>
      <Search
        value={swapi.search}
        onChange={(value) => swapi.setSearch(value)}
      />
      <div className={styles.cardList}>
        {swapi.allStarships?.map((starship) => (
          <CardStarship board={starship} />
        ))}
      </div>
    </div>
  );
}
