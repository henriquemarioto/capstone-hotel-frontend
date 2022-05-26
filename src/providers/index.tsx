import { ReactNode } from "react";
import { ServiceProvider } from "./Service";
import { LoginProvider } from "./Login";
import { EmployeesProvider } from "./Employee";
import { ClientsProvider } from "./clients";
import { BedroomProvider } from "./Bedroom";

interface AppProvider {
  children: ReactNode;
}

const Provider = ({ children }: AppProvider) => {
  return (
    <LoginProvider>
      <ServiceProvider>
        <ClientsProvider>
          <BedroomProvider>
            <EmployeesProvider>{children}</EmployeesProvider>
          </BedroomProvider>
        </ClientsProvider>
      </ServiceProvider>
    </LoginProvider>
  );
};

export default Provider;
