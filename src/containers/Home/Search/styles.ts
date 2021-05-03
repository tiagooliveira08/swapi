import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  cardSearchWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  cardSearch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "600px",
    height: "300px",
    boxShadow: "0 10px 6px -10px #777",
    border: "1px solid #ccc",
    borderRadius: 6,
  },
  inputSearch: {
    padding: 15,
    fontSize: 16,
    color: "#535459",
  },
  cardSearchText: {
    color: "#535459",
    fontSize: 18,
    fontWeight: "bold",
    marginBlock: 18,
  },
});
