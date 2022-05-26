import { ReactNode } from "react";
import { ServiceProvider } from "./Service";
import { LoginProvider } from "./Login";
import { EmployeesProvider } from "./Employee";
import { ClientsProvider } from "./clients";
import { BedroomProvider } from "./Bedroom";
import { HiredServiceProvider } from "./HiredService";

interface AppProvider {
  children: ReactNode;
}

const Provider = ({ children }: AppProvider) => {
  return (
    <LoginProvider>
      <ServiceProvider>
        <ClientsProvider>
          <BedroomProvider>
            <HiredServiceProvider>
              <EmployeesProvider>{children}</EmployeesProvider>
            </HiredServiceProvider>
          </BedroomProvider>
        </ClientsProvider>
      </ServiceProvider>
    </LoginProvider>
  );
};

export default Provider;
