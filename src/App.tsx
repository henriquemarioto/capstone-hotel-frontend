import GlobalStyle from "./styles/global";
import Routes from "./routes/routes";
import { useLogin } from "./providers/Login";

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
