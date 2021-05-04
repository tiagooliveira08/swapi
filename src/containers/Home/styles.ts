import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  home: {
    width: "100%",
    minHeight: "calc(100vh-90px)",
    padding: "0 60px",
    boxSizing: "border-box",
  },
  cardList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    marginTop: 30,
    columnGap: 30,
    rowGap: 30,
  },
});
