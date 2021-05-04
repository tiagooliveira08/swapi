import { makeStyles } from "@material-ui/styles";

export const useGlobalStyles = makeStyles(() => ({
  "@global": {
    html: {
      fontFamily: "Poppins, sans-serif",
    },
  },
}));
