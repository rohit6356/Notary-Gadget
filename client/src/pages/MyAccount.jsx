import { useAuth } from "../store/auth"

export const MyAccount = () => {
    const { isLoggedIn  } = useAuth();
    const {user} = useAuth()
    // console.log("userdataa" , user.userData.email);
   
return <>
{isLoggedIn ? <>
    <div className="container mt-3">
    <div className="mainMyAc">
    <div className="d-flex justify-content-center ">
        <div className="btnMyAcc ">Change Login ID</div>
        <div className="btnMyAcc">Change Password</div>
        <div className="btnMyAcc">Billing History</div>
        <div className="btnBuyNow text-white">Buy Now</div>
    </div>

    <div className="details d-flex justify-content-around" style={{marginTop:"4rem"}}>
        <div className="emailDetails" style={{width:"30%"}}>
            <p className="" style={{borderBottom:"2px solid #33CCFF" }}>LOGIN INFO</p>
           <div className="d-flex justify-content-between"> <p>Login ID / Email </p>
            <span style={{}}>{user.userData.email}</span>  </div>
           <div className="d-flex justify-content-between"> <p>Password </p>
            <span style={{}}>***********</span>  </div>
        </div>
        <div className="subscriptionDetails" style={{width:"30%"}}>
        <p className="" style={{borderBottom:"2px solid #33CCFF" }}>SUBSCRIPTION</p>
        <div className="d-flex justify-content-between"> <p>Subscription </p>
            <span className="text-danger" style={{}}>In Trial Period</span>  </div>
       
        </div>
    </div>

    <div className="d-flex justify-content-center mt-5">
        <div className="btnMyAcc ">Download All My data</div>
        <div className="btnMyAcc" style={{backgroundColor:"#ff0000"}}>Cencel Account</div>
     
    </div>

    </div>
</div>
</> :<h1 style={{marginTop : "100px"}}>you are trying to access an authorised services ! please login first </h1>}


</>
}