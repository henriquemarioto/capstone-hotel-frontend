import GlobalStyle from "./styles/global"
import Routes from "./routes/routes"
import { Toaster } from "react-hot-toast"
import { useService } from "./providers/Service"
import { useEffect } from "react"
import BedroomsPage from "./pages/bedrooms"

function App() {
  return (
    <>
      <Toaster />
      <GlobalStyle />
      <Routes />
      <BedroomsPage />
    </>
  )
}

export default App
