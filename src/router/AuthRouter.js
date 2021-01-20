import { Route, Switch } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

const AuthRouter = () => {
  
  return (
    <Switch>
      <Route
        exact
        path='/auth/login'
        component={ LoginScreen }/>

      <Route
        exact
        path='/auth/register'
        component={ RegisterScreen }/>
    </Switch>
  )

};

export default AuthRouter;

/**
 * .color1 {color: #120907;}
  .color2 {color: #232140;}
  .color3 {color: #5a5e95;}
  .color4 {color: #989de7;}
  .color5 {color: #d4d8ed;}
 */