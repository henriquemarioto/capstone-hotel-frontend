import GlobalStyle from "./styles/global";
import Routes from "./routes/routes";
import {Toaster} from 'react-hot-toast'
import { useEffect } from "react";

function App() {

  return (
    <>
      <Toaster />
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App
