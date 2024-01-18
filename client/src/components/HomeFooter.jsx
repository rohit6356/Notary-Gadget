import { useAuth } from "../store/auth"

export const HomeFooter = () =>{
    const {isLoggedIn} = useAuth();
    
    return<>

{isLoggedIn ?  <>
    <div className="container">
       <div className="heading text-center align-center m-2" style={{height :"40px" , fontSize:"10px" ,backgroundColor: "#333333",color:"white" , padding: "10px"}}>
       © NotaryGadget, LLC.  All rights reserved.
       </div>
    </div> </>
    : <h1 style={{marginTop : "100px"}}>you are trying to access an authorised services ! please login first </h1>}





</>


}