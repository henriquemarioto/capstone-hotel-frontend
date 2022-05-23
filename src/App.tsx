<<<<<<< HEAD
import GlobalStyle from "./styles/global";
import Routes from "./routes/routes";
import {Toaster} from 'react-hot-toast'
import { useService } from "./providers/Service";
import { useEffect } from "react";
=======
import GlobalStyle from "./styles/global"
import Routes from "./routes/routes"
>>>>>>> 50929516c1d095aaa7835a1a6dc7542f9b8871f8

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
