import { useQuery } from "react-query";

import { getAllStarships } from "services";
import { useStyles } from "./styles";

export function Home() {
  const styles = useStyles();

  const { data: allStarships } = useQuery(
    getAllStarships.name,
    getAllStarships
  );

  return <div className={styles.home}></div>;
}
