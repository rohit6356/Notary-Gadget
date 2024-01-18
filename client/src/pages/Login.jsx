import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
// import { useAuth } from "../store/auth";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const {storeTokenInLS} = useAuth();
  const navigate = useNavigate();

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

    // handle form on submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);

const response = await fetch('http://localhost:5000/api/auth/login' ,{
  method: "POST",
  headers:{
    "Content-Type" : "application/json"
  },
  body : JSON.stringify(user)
})
// const res_data = await response.json();
//       storeTokenInLS(res_data.token)
if(response.ok){
  
  const res_data = await response.json();
  storeTokenInLS(res_data.token);
  
  window.alert("login successfully")
  navigate('/home')
}
else{
  window.alert("invalid credential")
}

      };

  return (
    <>
      <section className="container mt-5 " >
      <div className="d-flex align-center" style={{marginTop : "8rem" ,padding : "5px 100px"}}>
           
      
      <div className="text-center" style={{padding : "3em 5em 3em 5em"}}>
              <h2 className='display-6 '>User Login</h2>
          <img style={{width:"50px" ,marginTop:"15px"}} src="https://www.notarygadget.com/Graphics/IconPersonGray2.png"/>
             
              </div>
              
              <div className="form">
                {/* <h1 className="main-heading mb-3">Login form</h1> */}
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
                  <div className="checkbox">
                    <input type="checkbox" name="RememberMe" id="" />
                    <label>Remember Me</label>
                  </div>
                  <br />
                  <div className="text-center">
                  <button type="submit" className="btn btn-dark">
                    Login
                  </button>
                  </div>
                </form>

              </div>
            
         
        </div>
      </section>


      <hr/>
    </>
  );
};
