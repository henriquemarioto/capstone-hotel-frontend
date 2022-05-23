import { ReactNode } from "react";
import { LoginProvider } from "./Login";
import { ServiceProvider } from "./Service";

interface AppProvider {
  children: ReactNode;
}

const Provider = ({ children }: AppProvider) => {
  return (
    <LoginProvider>
      <ServiceProvider>{children}</ServiceProvider>
    </LoginProvider>
  );
};

export default Provider;
