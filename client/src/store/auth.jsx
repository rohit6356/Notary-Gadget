import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user , setuser] = useState("");

  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

let isLoggedIn = !!token;
// console.log("tokenn", token);
// console.log("isLoggedin ", isLoggedIn);

// jwt authentication 

const userAuthentication = async() =>{
  try {
    const response = await fetch("https://notary-gadget-9zap.vercel.app/api/auth/user",{
      method : "GET",
      headers : {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("response",response);

    if(response.ok){
      const data = await response.json();
      // console.log("data" , data);
      setuser(data);
    }

  } catch (error) {
    console.error("error fetching user data");
  }

}
useEffect(()=>{
  userAuthentication();
},[token]);

  //   to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
