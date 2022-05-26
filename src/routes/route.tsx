import { ReactNode } from "react";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useLogin } from "../providers/Login";

interface Props {
  isPrivate?: boolean;
  children: ReactNode;
  path: string;
  exact?: boolean;
}

const Route = ({ isPrivate = false, children, ...rest }: Props) => {
  const { token } = useLogin();

  // true e true = ok (Component)
  // true e false = Login
  // false e true = Dashboard
  // false e false = ok (Component)

  return (
    <ReactDOMRoute {...rest}>
      {isPrivate === !!token ? (
        <>{children}</>
      ) : (
        <Redirect to={isPrivate ? "/login" : "/dashboard"} />
      )}
    </ReactDOMRoute>
  );
};

export default Route;
