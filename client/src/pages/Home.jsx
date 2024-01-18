import '../components/Navbar.css'
import { useAuth } from "../store/auth"

export const Home = () =>{  
  const { isLoggedIn } = useAuth();
return <>
{isLoggedIn ? <>
    <div className="container " style={{marginTop:"100px"}}>
       <div className="leftside" style={{width:"30%" , height:"" , backgroundColor:"#EEEEEE"}}>
          
          <div className="homeLists" style={{ color:"#ffffff" ,  padding:"5rem 0.1rem"}}>
            <div className="list d-flex" style={{width:"285px" , height:"60x" }}>
              <img sty src="https://www.notarygadget.com/Graphics/IconCalendar3.png" alt="" />
              <p style={{}}>UPCOMING SIGNINGS <span style={{fontSize:"22px"  ,padding:"10px 5px 10px 30px"}}>0</span></p>
            </div>
            <div className="list d-flex" style={{width:"285px" , height:"60px" }}>
              <img sty src="https://www.notarygadget.com/Graphics/IconInvoice2.png" alt="" />
              <p style={{}}>UNSENT INVOICES<span style={{fontSize:"22px"  ,padding:"10px 5px 10px 30px"}}>0</span></p>
            </div>
            <div className="list d-flex" style={{width:"285px" , height:"60px" }}>
              <img sty src="https://www.notarygadget.com/Graphics/IconCar4.png" alt="" />
              <p style={{}}>MILEAGE NOT ENTERED <span style={{fontSize:"22px"  ,padding:"10px 5px 10px 30px"}}>0</span></p>
            </div>
            <div className="list d-flex" style={{width:"285px" , height:"60px" }}>
              <img sty src="https://www.notarygadget.com/Graphics/IconStamp2.png" alt="" />
              <p style={{}}>NOTARIAL ACTS NOT ENTERED <span style={{fontSize:"22px"  ,padding:"10px 5px 10px 30px"}}>0</span></p>
            </div>
            <div className="list d-flex" style={{width:"285px" , height:"60px" }}>
              <img sty src="https://www.notarygadget.com/Graphics/IconNo2.png" alt="" />
              <p style={{}}>SIGNINGS WITH FEES OF $0.00<span style={{fontSize:"22px"  ,padding:"10px 5px 10px 30px"}}>0</span></p>
            </div>
            <div className="list d-flex" style={{width:"285px" , height:"60px" }}>
              <img sty src="https://www.notarygadget.com/Graphics/IconMoneyBag2.png" alt="" />
              <p style={{}}>UNPAID SIGNINGS 0-30 DAYS<span style={{fontSize:"22px"  ,padding:"10px 5px 10px 30px"}}>0</span></p>
            </div>
            <div className="list d-flex" style={{width:"285px" , height:"60px" }}>
              <img sty src="https://www.notarygadget.com/Graphics/IconMoneyBag2.png" alt="" />
              <p style={{}}>UNPAID SIGNINGS 31-60 DAYS <span style={{fontSize:"22px"  ,padding:"10px 5px 10px 30px"}}>0</span></p>
            </div>
            <div className="list d-flex" style={{width:"285px" , height:"60px" }}>
              <img sty src="https://www.notarygadget.com/Graphics/IconMoneyBag2.png" alt="" />
              <p style={{}}>UNPAID SIGNINGS 60+ DAYS <span style={{fontSize:"22px"  ,padding:"10px 5px 10px 30px"}}>0</span></p>
            </div>
           
            
          </div>

       </div>
    </div>



</> : <h1 style={{marginTop : "100px"}}>you are trying to access an authorised services ! please login first </h1>}

 


   
           
     
</>

}