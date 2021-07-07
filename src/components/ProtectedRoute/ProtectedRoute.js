import { Redirect, Route } from "react-router-dom";


const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {
        () => props.isAutenticated
          ? <Component {...props} />
          : <Redirect to="./signin" />
      }
    </Route>
  );
}

export default ProtectedRoute;
