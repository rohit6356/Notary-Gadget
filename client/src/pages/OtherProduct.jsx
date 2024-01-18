import { useAuth } from "../store/auth"


export const OtherProduct = () => {
    const { isLoggedIn } = useAuth();
//   console.log(isLoggedIn);
    return <>
    
{ isLoggedIn ?  <>
      <div className="container">
            <div className="mainHeading">
                <p className="text-center" style={{ margin: "4rem 23rem", width: "500px" }}>We created this page to help you discover other products that can help you build and/or streamline your notary business.  We don't own these products, but many of our users have said great things about them so we wanted to share them with you:</p>
            </div>

            <div className="cardsSection d-flex flex-column ">
                <div className="upperCards d-flex justify-content-around">
                    <div className="card card1">
                        <img style={{width:"218px" ,  margin:"1rem 4rem"}} src="https://www.notarygadget.com/Graphics/OtherProducts/LogoNotaryStars.png" alt="" />
                        <p style={{margin:"1rem 3rem  "}}>Notary Stars offers over 150+ hours of training on every loan product there is, including RON training. Full access to recorded videos or login with a LIVE instructor for additional support. Get real-time phone support with mentors who have over 35+ collective years of experience as Signing Agents, Escrow Officers, and Lenders.</p>
                       
                    </div>
                    <div className="card card2 ">
                        <img style={{width:"317px" , margin:"1rem 2rem"}} src="https://www.notarygadget.com/Graphics/OtherProducts/PageLogoLarge.png" alt="" />
                       <p style={{margin:"1rem 2rem"}}>Software that makes printing loan documents with both letter and legal pages easier.</p>
                    </div>
                </div>
                <div className="lowerCards d-flex">
                <div className="card card3" style={{marginLeft:"6rem" }}>
                    <img style={{width:"206px", margin:"1rem 5rem"}} src="https://www.notarygadget.com/Graphics/OtherProducts/LSSLogoLarge.png" alt=""  />
                <p style={{margin:"1rem 2rem"}}>America's #1 Notary Public Loan Signing Agent Training Course and Certification.</p>
                </div>
                </div>
            </div>

        </div>
        </>
      : <h1 style={{marginTop : "100px"}}>you are trying to access an authorised services ! please login first </h1>
      }
     

    </>
}