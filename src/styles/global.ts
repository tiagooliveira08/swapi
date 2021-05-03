import { makeStyles } from "@material-ui/styles";

export const useGlobalStyles = makeStyles((theme) => ({
  "@global": {
    html: {
      fontFamily: "Poppins, sans-serif",
    },
  },
}));
