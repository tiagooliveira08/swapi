import { useState } from "react";

import { useStyles } from "./styles";

export function Search() {
  const [value, setValue] = useState<string | null>(null);

  const styles = useStyles();

  return (
    <div className={styles.cardSearchWrapper}>
      <div className={styles.cardSearch}>
        <span className={styles.cardSearchText}>
          Distância a ser percorrida (MGLT)
        </span>
        <input
          className={styles.inputSearch}
          placeholder="123456"
          autoFocus
          value={value || undefined}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </div>
  );
}
