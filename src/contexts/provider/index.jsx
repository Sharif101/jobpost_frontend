import { StateProvider } from "./state";
import { AuthProvider } from "./auth";
import { UserProvider } from "./user";
import { GatewayProvider } from "./gateway";

export const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <GatewayProvider>
          <StateProvider>{children}</StateProvider>
        </GatewayProvider>
      </UserProvider>
    </AuthProvider>
  );
};
