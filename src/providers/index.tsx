import { ReactNode } from "react";
import { ServiceProvider } from "./Service";
import { LoginProvider } from "./Login";
import { EmployeesProvider } from "./Employee";
import { ClientsProvider } from "./clients";
import { BedroomProvider } from "./Bedroom";
import { HiredServiceProvider } from "./HiredService";
import { MessagesProvider } from "./Messages";

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
              <EmployeesProvider>
                <MessagesProvider>{children}</MessagesProvider>
              </EmployeesProvider>
            </HiredServiceProvider>
          </BedroomProvider>
        </ClientsProvider>
      </ServiceProvider>
    </LoginProvider>
  );
};

export default Provider;
