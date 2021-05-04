import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    boxShadow: "0 10px 6px -10px #777",
    border: "1px solid #ccc",
    borderRadius: 6,
    color: "#535459",
    padding: "60px 0 ",
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  smallText: {
    fontSize: 8,
    position: "absolute",
    top: 0,
    left: "100%",
  },
  countWrapper: {
    position: "relative",
  },
  count: {
    fontSize: 46,
    display: "inline-block",
  },
});
