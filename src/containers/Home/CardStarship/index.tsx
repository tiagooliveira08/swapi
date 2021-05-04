import { StarshipsModelWithStops } from "stores/swapiStore";

import { useStyles } from "./styles";

interface CardStarshipsProps {
  board: StarshipsModelWithStops;
}

export function CardStarship({ board }: CardStarshipsProps) {
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{board.name}</h2>
      <div className={styles.countWrapper}>
        <div className={styles.count}>{board.stops}</div>
        <span className={styles.smallText}>Paradas</span>
      </div>
    </div>
  );
}
