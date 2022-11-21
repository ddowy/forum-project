import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main"
import { useState } from "react";
import { UserData } from "./UserData"

function App() {
  const [logInRegisterPopUp, setLogInRegisterPopUp] = useState(false)
  const [userData, setUserData] = useState(null)
  return (
    <div>
      <UserData>
        <Navbar 
        setLogInRegisterPopUp={setLogInRegisterPopUp} 
        logInRegisterPopUp={logInRegisterPopUp}
        userData={userData}
        setUserData={setUserData}
        />
        <Main 
        setLogInRegisterPopUp={setLogInRegisterPopUp}
        logInRegisterPopUp={logInRegisterPopUp}
        userData={userData}
        setUserData={setUserData}
        />
      </UserData>
    </div>
  );
}

export default App;
