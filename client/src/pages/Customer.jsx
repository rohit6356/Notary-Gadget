import { NavLink } from "react-router-dom"
import { useAuth } from "../store/auth"


export const Customer = () =>{

const {isLoggedIn} = useAuth();
return <>
{isLoggedIn ? <>
    <div className="container">
    <div className="signingsBtn d-flex justify-content-center">
   <div className="leftButtons m-4" style={{}}>
   <div className="d-flex justify-content-start">
        <div className="btnMyAcc" style={{backgroundColor:"#212529"}}><NavLink to="/newSigning" style={{color:"#FFFFFF" , fontSize:"13px" , textDecoration:"none"}}> New Customer</NavLink></div>
        <div className="btnMyAcc"><NavLink to="/import"  style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}>Send Mass Email</NavLink></div>
        <div className="btnMyAcc"><NavLink to="/enterPayment" style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}> Download to Excel</NavLink></div>
        {/* <div className="btnMyAcc"><NavLink to="/enterPayment" style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}> Edit Categories</NavLink></div> */}
        {/* <div className="btnBuyNow text-white" style={{backgroundColor:"#D4D4D4"}}><NavLink to="/combinedInvoices" style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}>Search</NavLink></div> */}
        {/* <div className="btnBuyNow text-white" style={{backgroundColor:"#D4D4D4"}}><NavLink to="/combinedInvoices" style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}>Search</NavLink></div> */}
    </div>
   </div>


   
    </div>

<div className="signingCard " style={{marginLeft:"298px"}}>
    <div className="d-flex signignSInfo" style={{width:"35vw"}}>
        <p>Company</p>
        <p>first</p>
        <p>Last</p>
        <p>Location</p>
        <p>Signings</p>
        <p>Total</p>
        <p>Unpaid</p>
       
    </div>
    <div className="signingFound" style={{width:"35vw"}}>
      <p style={{marginLeft:"0px"}}> General Notary Work</p>
    </div>
</div>


 </div>
</> :
<></>
}



</>
}