import { NavLink } from "react-router-dom"
import { useAuth } from "../store/auth"

export const Signings = () =>{
const {isLoggedIn} = useAuth();

 return <>
{isLoggedIn ? <>
  <div className="container">
    <div className="signingsBtn d-flex justify-content-between">
   <div className="leftButtons m-4" style={{}}>
   <div className="d-flex justify-content-start">
        <div className="btnMyAcc" style={{backgroundColor:"#212529"}}><NavLink to="/newSigning" style={{color:"#FFFFFF" , fontSize:"13px" , textDecoration:"none"}}> New Signing</NavLink></div>
        <div className="btnMyAcc"><NavLink to="/import"  style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}>Import</NavLink></div>
        <div className="btnMyAcc"><NavLink to="/enterPayment" style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}> Enter Payment</NavLink></div>
        <div className="btnBuyNow text-white" style={{backgroundColor:"#D4D4D4"}}><NavLink to="/combinedInvoices" style={{color:"#212529" , fontSize:"13px" , textDecoration:"none"}}>Combined Invoices</NavLink></div>
    </div>
   </div>


    <div className="rightButtons m-4">
  <div className="d-flex ">
    <div>
    <select style={{ fontSize: "15px" ,width:"200px" }} name="more" id="">
     <option value="Reports" selected hidden disabled>Unpaid or has Alert</option>
     <option value="Profit & Loss Report">Unpaid All</option>
     <option value="Sales Report">Unpaid (0-30 Days) </option>
     <option value="Unpaid Invoices">Unpaid (31-60 Days)</option>
     <option value="Mileage Report">Unpaid (60+ Days)</option>
     <option value="1099 / Payment Received Report">Upcoming</option>
     <option value="Journal Report">Appt Not </option>
     <option value="Journal Report">Unsent Invoices</option>
     <option value="Journal Report">Missing Mileage</option>
     <option value="Journal Report">Missing Notarial fees</option>
     <option value="Journal Report">Cancelled</option>
     <option value="Journal Report">All Signings</option>
   </select>
    </div>
    <div>
    <select style={{ fontSize: "15px" ,width:"120px" }} name="more" id="">
     <option value="Reports" selected hidden disabled>All Customers</option>
     <option value="Profit & Loss Report">General Notary Work</option>
   
   </select>
    </div>
  </div>

    </div>
    </div>

<div className="signingCard">
    <div className="d-flex signignSInfo">
        <p>status</p>
        <p>Date</p>
        <p>Single</p>
        <p>Location</p>
        <p>Balance</p>
        <p>O/E #</p>
        <p>Invoice #</p>
        <p>Alert</p>
        <p>Customer</p>
    </div>
    <div className="signingFound" style={{width:"45vw"}}>
      <p> No Signing were Found</p>
    </div>
</div>


 </div>
</>  :
<></>}



 
 </>
}