
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Signup = () => {
  const [user, setUser] = useState({
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    address:"",
    code: "",
    phone:"",
    hearAboutThis:""
  });

  const{ storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  
//   const {storeTokenInLS} = useAuth();
  const navigate = useNavigate();
  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);

   const response  = await fetch('https://notary-gadget-9zap.vercel.app/api/auth/register', {
    method:"POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body:JSON.stringify(user)
  
   })

   
   if(response.ok){  
   const res_data = await response.json();
   storeTokenInLS(res_data.token)
    setUser({
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        address:"",
        code: "",
        phone:"",
        hearAboutThis:""
    });
    navigate("/login")

   }
     

  //  console.log(response)
  };


  return (
    <>
      <section className="container">
            <div className="d-flex align-center" style={{marginTop : "8rem" ,padding : "5px 100px"}}>
              <div className="" style={{padding : "3em 5em 3em 5em"}}>
              <h2 className='display-6 '>Try it for FREE</h2>
              <img style={{padding: "20px 5rem"}} src="https://www.notarygadget.com/Graphics/Website/IconHeartGray.png"/>
              <p className=''>Your first 15 signings are 100% free - <span className="text-danger"> regardless of how long it takes you! </span> You get complete access to all of NotaryGadget's features with no strings attached and no credit card is required</p>
              <p className=''>If you love it after 15 signings, then you can choose one of our paid plans.  If it's not for you, then no big deal...your account will automatically go inactive.</p>

              </div>


              {/* our main registration code  */}
              <div className="registration-form form" style={{paddingRight : "6em"}}>
                {/* <h1 className="main-heading mb-3">Registration form</h1> */}
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label> <br/>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                 
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label> <br/>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                   
                    />
                  </div>
                  <div className="d-flex">
                  <div>
                    <label htmlFor="firstName">FirstName</label> 
                    <input style={{ width : "130px"}}
                      type="text"
                      name="firstName"
                      value={user.firstName}
                      onChange={handleInput}
                     
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName">LastName</label>
                    <input style={{marginLeft : "5px" , width : "130px"}}
                      type="text"
                      name="lastName"
                      value={user.lastName}
                      onChange={handleInput}
                     
                    />
                  </div>
                  </div>
                  <div>
                    <label htmlFor="address">Address</label> <br/>
                    <input
                      type="text"
                      name="address"
                      value={user.address}
                      onChange={handleInput}
                     
                    />
                  </div>
                  <div>
                    <label htmlFor="code">Code</label> <br />
                    <input
                      type="text"
                      name="code"
                      value={user.code}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label> <br />
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="hearAboutThis">How did you hear about us</label> <br />
                    <input
                      type="text"
                      name="hearAboutThis"
                      value={user.hearAboutThis}
                      onChange={handleInput}
                    />
                  </div>
                  
                  <br />
                  <button type="submit" className="btn btn-dark">
                    Create My Free Account
                  </button>
                </form>
              </div>
            </div>
          
        
      </section>

      <hr/>
    </>
  );
};
