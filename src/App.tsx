import GlobalStyle from "./styles/global";
import Routes from "./routes/routes";
import { Toaster } from "react-hot-toast";

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
