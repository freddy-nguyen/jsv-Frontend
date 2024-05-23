import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";


const PrivateRoutes = (props) => {
    let history = useHistory();
    useEffect(() => {
        let session = sessionStorage.getItem('account'); //only get after somewhere we set (login.js), step 2 of Windows Session Storage
        //getItem is javascript func, returning javascript obj string that looks like this: {"isAuthenticated": true, "token":"fake token"}
        // to convert that (session) to javascript object, not str, use JSON.parse()
        //after conversion, we could use account.isAuthenticated
        if (!session) {
            history.push('/login');
            toast.error("Please log in first.");
            //JSON parse converts javascript object string into object
        }
    }, []);

    return (
        <>
            <Route path={props.path} component={props.component} />
        </>
    )
}

export default PrivateRoutes;