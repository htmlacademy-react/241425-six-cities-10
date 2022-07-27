import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type privateRouteProps = {
  authorizationStatus: AuthorizationStatus,
  children: JSX.Element,
};

function PrivateRoute(props: privateRouteProps): JSX.Element {
  return (
    props.authorizationStatus === AuthorizationStatus.Auth ? props.children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
