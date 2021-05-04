import NumberFormat from "react-number-format";

import { useStyles } from "./styles";

interface SearchProps {
  value: string | null;
  onChange(value: string): void;
}

export function Search(props: SearchProps) {
  const styles = useStyles();

  return (
    <div className={styles.cardSearchWrapper}>
      <div className={styles.cardSearch}>
        <span className={styles.cardSearchText}>
          Distância a ser percorrida (MGLT)
        </span>
        <NumberFormat
          autoFocus
          thousandSeparator="."
          decimalSeparator=","
          placeholder="Insira aqui!"
          className={styles.inputSearch}
          value={props.value ?? undefined}
          onValueChange={(values) => props.onChange(values.value)}
        />
      </div>
    </div>
  );
}
