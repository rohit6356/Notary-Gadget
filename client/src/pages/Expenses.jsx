import { NavLink } from "react-router-dom"
import { useAuth } from "../store/auth"

export const Expenses= () =>{
const {isLoggedIn} = useAuth();

return<>
{isLoggedIn ? <>
    <div className="container">
    <div className="signingsBtn d-flex justify-content-center">
   <div className="leftButtons m-4" style={{}}>
   <div className="d-flex justify-content-start">
        <div className="btnMyAcc" style={{backgroundColor:"#212529"}}><NavLink to="/newSigning" style={{color:"#FFFFFF" , fontSize:"13px" , textDecoration:"none"}}> New Expenses</NavLink></div>
        <div className="btnMyAcc"><NavLink to="/import"  style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}>New Income</NavLink></div>
        <div className="btnMyAcc"><NavLink to="/enterPayment" style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}> Recuring Transaction </NavLink></div>
        <div className="btnMyAcc"><NavLink to="/enterPayment" style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}> Edit Categories</NavLink></div>
        <div className="btnBuyNow text-white" style={{backgroundColor:"#D4D4D4"}}><NavLink to="/combinedInvoices" style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}>Search</NavLink></div>
        {/* <div className="btnBuyNow text-white" style={{backgroundColor:"#D4D4D4"}}><NavLink to="/combinedInvoices" style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}>Search</NavLink></div> */}
    </div>
   </div>


   
    </div>

<div className="signingCard text-center" style={{marginLeft:"258px"}}>
    <div className="d-flex signignSInfo">
        <p>Date</p>
        <p>Type</p>
        <p>Category</p>
        <p>Amount Receipt</p>
        <p>vendor</p>
        <p>Notes</p>
        <p>signing</p>
        <p>Alert</p>
        <p>Customer</p>
    </div>
    <div className="signingFound" style={{width:"45vw"}}>
      <p> No Signing were Found</p>
    </div>
    <div>
        <p>*NOTE: Mileage from your signings is not included on this page. <br/> It is included on your Profit & Loss Report.</p>
    </div>
</div>


 </div>
</> : 
<></>}



</>
}