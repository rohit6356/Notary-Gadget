import { useAuth } from "../store/auth"

export const Settings = () =>{
const {isLoggedIn} = useAuth();

    const {user} = useAuth()
    // console.log(user);

    return <>

    {isLoggedIn?
    <> <div className="container ">
    <div className="leftSettings d-flex justify-content-around">

    <div className="emailDetails" style={{width:"30%"}}>
        {/* <p className="" style={{borderBottom:"2px solid #33CCFF" }}>GOOGLE CALENDAR & GMAIL</p> */}
       <div className="d-flex justify-content-between mt-5 settingHeading" style={{borderBottom:"2px solid #33CCFF" }}> <p style={{marginBottom:"0px"}}>GOOGLE CALENDAR & GMAIL </p>
        <span style={{}}>Edit</span>  </div>
       <div className="d-flex justify-content-between"> <p>Google Calendar/Gmail: </p>
        <span className="text-danger" style={{}}>Disabled</span>  </div>

       <div className="d-flex justify-content-between mt-5 settingHeading" style={{borderBottom:"2px solid #33CCFF" }}> <p style={{marginBottom:"0px"}}>TEXT MSG REMINDERS</p>
        <span style={{}}>Edit</span>  </div>
       <div className="d-flex justify-content-between"> <p>Text Msg Reminders: </p>
        <span className="text-danger" style={{}}>Disabled</span>  </div>
      
       <div className="d-flex justify-content-between mt-5 settingHeading" style={{borderBottom:"2px solid #33CCFF" }}> <p style={{marginBottom:"0px"}}>SIGNING DEFAULTS</p>
        <span style={{}}>Edit</span>  </div>
       <div className="d-flex justify-content-between"> <p>Appt Duration: </p>
        <span style={{}}>1 Hour</span>  </div>
       <div className="d-flex justify-content-between"> <p>Default Reminder:</p>
        <span style={{}}>None</span>  </div>
       <div className="d-flex justify-content-between"> <p>Email Reminder: </p>
        <span style={{}}>No</span>  </div>
       <div className="d-flex justify-content-between"> <p>Add to Phone Via Email: </p>
        <span style={{}}>No</span>  </div>
       <div className="d-flex justify-content-between"> <p>Notarial Fee Per Act: </p>
        <span style={{}}>--</span>  </div>
       <div className="d-flex justify-content-between"> <p>Notarial Fee Per Act 2: </p>
        <span style={{}}>--</span>  </div>
       <div className="d-flex justify-content-between"> <p>Notarial Fee Per Act 2 (RON):	 </p>
        <span style={{}}>Google</span>  </div>
       <div className="d-flex justify-content-between"> <p>Signer Reminders:</p>
        <span style={{}}>Off</span>  </div>
       <div className="d-flex justify-content-between"> <p>My Time Zone: </p>
        <span style={{}}>Pacific</span>  </div>

        <div className="d-flex justify-content-between mt-5 settingHeading" style={{borderBottom:"2px solid #33CCFF" }}> <p style={{marginBottom:"0px"}}>ADDRESS FOR MILEAGE CALC</p>
        <span style={{}}>Edit</span>  </div>
       <div className="d-flex justify-content-between"> <p>My Address: </p>
        <span className="text-danger" style={{}}>{user.userData.address} , {user.userData.code}</span>  </div>
      
        <div className="d-flex justify-content-between mt-5 settingHeading" style={{borderBottom:"2px solid #33CCFF" }}> <p style={{marginBottom:"0px"}}>CALENDAR PAGE</p>
        <span style={{}}>Edit</span>  </div>
       <div className="d-flex justify-content-between"> <p>Calendar Start Day:</p>
        <span style={{}}>Sunday</span>  </div>
       <div className="d-flex justify-content-between"> <p>Appointment Label:</p>
        <span style={{}}>City</span>  </div>
      

        <div className="d-flex justify-content-between mt-5 settingHeading" style={{borderBottom:"2px solid #33CCFF" }}> <p style={{marginBottom:"0px"}}>ALERTS</p>
        <span style={{}}>Edit</span>  </div>
       <div className="d-flex justify-content-between"> <p>Appointment Confirmed</p>
        <span style={{}}>Off</span>  </div>
       <div className="d-flex justify-content-between"> <p>Invoice Not Sent:</p>
        <span style={{}}>On</span>  </div>
       <div className="d-flex justify-content-between"> <p>Mileage Not Entered</p>
        <span style={{}}>On</span>  </div>
       <div className="d-flex justify-content-between"> <p>Notarial Acts Not Entered:</p>
        <span style={{}}>On</span>  </div>
      
        <div className="d-flex justify-content-between mt-5 settingHeading" style={{borderBottom:"2px solid #33CCFF" }}> <p style={{marginBottom:"0px"}}>CUSTOM FIELDS</p>
        <span style={{}}>Edit</span>  </div>
       <div className="d-flex justify-content-between"> <p>Custom Field 1:</p>
        <span style={{}}>None</span>  </div>
       <div className="d-flex justify-content-between"> <p>Custom Field 2:</p>
        <span style={{}}>None</span>  </div>
       <div className="d-flex justify-content-between"> <p>Custom Field 3:</p>
        <span style={{}}>None</span>  </div>
       <div className="d-flex justify-content-between"> <p>Custom Field 4:</p>
        <span style={{}}>None</span>  </div>
       <div className="d-flex justify-content-between"> <p>Custom Field 5:</p>
        <span style={{}}>None</span>  </div>
      
      
    </div>



    <div className="rightSettings" style={{width:"30%"}}>

    <div className="d-flex justify-content-between mt-5 settingHeading" style={{borderBottom:"2px solid #33CCFF" }}> <p style={{marginBottom:"0px"}}>My Logo</p>
        <span style={{}}>Edit</span>  </div>
       <div className="d-flex justify-content-between"> <p>Signing Location</p>
        <span style={{}}>Do not include on invoice</span>  </div>
       <div className="d-flex justify-content-between"> <p>Tracking Number:</p>
        <span style={{}}>Do not include on invoice</span>  </div>
       <div className="d-flex justify-content-between"> <p>Invoice Address:</p>
        <span style={{}}>{user.userData.firstName} {user.userData.lastName} <br/> {user.userData.address} {user.userData.code}</span>  </div>
       <div className="d-flex justify-content-between"> <p>Message on Invoice:</p>
        <span style={{}}>Thank you for your business!</span>  </div>
       <div className="d-flex justify-content-between"> <p>Footer Text:</p>
        <span style={{}}>Powered by NotaryGadget.com</span>  </div>
 
    <div className="d-flex justify-content-between mt-5 settingHeading" style={{borderBottom:"2px solid #33CCFF" }}> <p style={{marginBottom:"0px"}}>INVOICE EMAIL</p>
        <span style={{}}>Edit</span>  </div>
       <div className="d-flex justify-content-between"> <p>Invoice Email:</p>
        <span style={{}}>Hi, here is my invoice for the [SignerFirstName] [SignerLastName] signing. Thank you for your business!</span>  </div>
       <div className="d-flex justify-content-between"> <p>Combined Invoice Email</p>
        <span style={{}}>Hi, here is my combined invoice for mutliple signings. Thank you for your business!</span>  </div>
       <div className="d-flex justify-content-between"> <p>Email Signature:</p>
        <span style={{}}>{user.userData.firstName} {user.userData.lastName} <br/> {user.userData.address} {user.userData.code}</span>  </div>

        <div className="d-flex justify-content-between mt-5 settingHeading" style={{borderBottom:"2px solid #33CCFF" }}> <p style={{marginBottom:"0px"}}>NEXT INVOICE NUMBER</p>
        <span style={{}}>Edit</span>  </div>
       <div className="d-flex justify-content-between"> <p>Next Invoice Number:	1</p>
        {/* <span style={{}}>Sunday</span>   */}
        </div>
      
        <div className="d-flex justify-content-between mt-5 settingHeading" style={{borderBottom:"2px solid #33CCFF" }}> <p style={{marginBottom:"0px"}}>LANDING PAGE</p>
        <span style={{}}>Edit</span>  </div>
       <div className="d-flex justify-content-between"> <p>Landing Page:	Home
</p>
        {/* <span style={{}}>Sunday</span>  */}
         </div>
      

    </div>
    </div>
</div>
</>:
<></>
}

   

    
    </>
}