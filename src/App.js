import Nav from "./components/Navigations/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  //useState to make appear disappear efffect of nav bar
  const [account, setAccount] = useState({});
  //when component has been created, check if local session storage has session var, then render. 
  useEffect(() => {
    let session = sessionStorage.getItem('account'); //only get after somewhere we set (login.js), step 2 of Windows Session Storage
    //getItem is javascript func, returning javascript obj string that looks like this: {"isAuthenticated": true, "token":"fake token"}
    // to convert that (session) to javascript object, not str, use JSON.parse()
    //after conversion, we could use account.isAuthenticated
    if (session) {
      setAccount(JSON.parse(session));
      //JSON parse converts javascript object string into object
    }
  }, []) // [] to make useEffect run only one time

  return (
    <>
      <Router>
        <div className='app-header'>
          <Nav />
        </div>
        <div className='app-container'>
          <AppRoutes />
        </div>
      </Router >

      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;