import { ReactNode } from "react";
import { ServiceProvider } from "./Service";
import { LoginProvider } from "./Login";
import { EmployeesProvider } from "./Employee";

interface AppProvider {
  children: ReactNode;
}

const Provider = ({ children }: AppProvider) => {
  return (
    <LoginProvider>
      <ServiceProvider>
        <EmployeesProvider>{children}</EmployeesProvider>
      </ServiceProvider>
    </LoginProvider>
  );
};

export default Provider;
