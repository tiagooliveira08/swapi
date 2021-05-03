import { useQuery } from "react-query";

import { getAllStarships } from "services";
import { Search } from "./Search";

import { useStyles } from "./styles";

export function Home() {
  const { data: allStarships } = useQuery(
    getAllStarships.name,
    getAllStarships
  );

  const styles = useStyles();

  return (
    <div className={styles.home}>
      <Search />
    </div>
  );
}
