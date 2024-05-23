import {
    Switch,
    Route,
} from "react-router-dom";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Users from "../components/Users/Users";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = (props) => {
    return (
        <>
            <Switch>
                <PrivateRoutes path='/project' component={Users} />
                <PrivateRoutes path='/users' component={Users} />

                <Route path="/login">
                    <Login>login</Login>
                </Route>
                <Route path='/register'>
                    <Register>register</Register>
                </Route>
                <Route path="/" exact>
                    Home
                </Route>
                <Route path="*">
                    404
                </Route>
            </Switch>
        </>
    )
}
export default AppRoutes;