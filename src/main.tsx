import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Provider from "./providers";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);
