import { useState } from "react";
import Button from "./components/ui/button/Button";

const App = () => {

  const [auth,setAuth] = useState("login");
  
    const toggle = () => {
  
      {
        
        setAuth(
          auth === "login" ? "signup" : "login"
        )}
      
      }
  return <> 
    
    <Button onclick={toggle}>
      {auth}
    </Button>
  
  </>

}

export default App;