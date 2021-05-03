import { Footer, Header } from "components";
import { Home } from "containers/Home";

import { useGlobalStyles } from "styles";

export function App() {
  const useStyles = useGlobalStyles();

  return (
    <div className={useStyles["@global"]}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
