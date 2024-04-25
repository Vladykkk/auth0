import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Auth = () => {
  const { isLoading, error } = useAuth0();

  return (
    <>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading ...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
        </>
      )}
    </>
  );
};

export default Auth;
