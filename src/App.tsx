import GlobalStyle from "./styles/global";
import Routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { useService } from "./providers/Service";
import { useEffect } from "react";
import { Container } from "./style";

function App() {
  return (
    <>
      <Toaster />
      <GlobalStyle />

      <Routes />
    </>
  );
}

export default App;
