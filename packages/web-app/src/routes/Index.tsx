import { useAuthentication } from "../hooks/useAuthentication";
import { Auth } from "../pages/Auth";

export const Index = () => {
  const { isLoggedIn } = useAuthentication();
  return isLoggedIn ? <p>Hello World</p> : <Auth />;
};
