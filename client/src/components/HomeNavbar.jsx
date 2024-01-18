import { NavLink } from "react-router-dom"

export const HomeNavbar = () =>{
    return<>
     <div className='container LogoutNav mt-2'> 
    <div className='d-flex justify-content-end'>
    <NavLink to="/" className='btnBuyNow text-white'>Buy Now</NavLink>
    <NavLink to="/MyAccount" className=''>My Account</NavLink>
    <div style={{marginTop: "5px" ,paddingLeft : "4px"}}>|</div>
    <NavLink to="/otherProduct" className='' >Other Products</NavLink>
    <div style={{marginTop: "5px" ,paddingLeft : "4px"}}>|</div>
    <NavLink to="/logout" className=''>Logout</NavLink>
    </div>
  </div>
  <div className="container" style={{marginTop: "10px"}}>
 
 <div className="main">


<nav className="navbar">
 <ul>

   <li> <NavLink to="/home"> Home</NavLink>     </li>
   <li> <NavLink to="/signing">Signing </NavLink>     </li>
   {/* <li> <a href="/logout"> Logout</a>    </li> */}
   {/* <li> <NavLink to="/calender"> Calender</NavLink>    </li> */}
   <li> <NavLink to="/expenses"> Expenses </NavLink>           </li>
   <li> <NavLink to="/customers"> Customers </NavLink>           </li>



   {/* <li> <a href="/report"> Report</a>       </li> */}
   <label for="dog-names"></label>
   <select style={{ fontSize: "15px" ,width:"80px" }} name="more" id="more">
     <option value="Reports" selected hidden disabled>Reports</option>
     <option value="Profit & Loss Report">Profit & Loss Report</option>
     <option value="Sales Report">Sales Report</option>
     <option value="Unpaid Invoices">Unpaid Invoices</option>
     <option value="Mileage Report">Mileage Report</option>
     <option value="1099 / Payment Received Report">1099 / Payment Received Report</option>
     <option value="Journal Report">Journal Report</option>
   </select>
   <li> <NavLink to="/settings"> Settings </NavLink>           </li>


 </ul>

</nav>

<div className="logo">
 <img style={{paddingLeft:"2px"}} className='logoImg' src="https://www.notarygadget.com/Graphics/NotaryGadgetLogoV3.png" alt="" />
</div>

</div>
 </div>
    </>
}