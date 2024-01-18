import { NavLink } from "react-router-dom"
import './Navbar.css'
import { useAuth } from "../store/auth"


export const Navbar = () => {

  const { isLoggedIn } = useAuth();

  return <>

    <header>
      <div className="main fixed-top">

        <div className="logo">
          <img className='logoImg' src="https://www.notarygadget.com/Graphics/NotaryGadgetLogoV3.png" alt="" />
        </div>
        <nav className="navbar">
          <ul>

            <li> <a href="/features"> Features</a>     </li>
            <li> <a href="/pricing">pricing </a>     </li>

            {isLoggedIn ?
              <li> <a href="/logout"> Logout</a>    </li> :
              <>
                <li> <a href="/signup"> Signup</a>    </li>
                <li> <a href="/login"> Login </a>           </li>
              </>

            }
            {/* <li> <a href="/learningCenter"> Learning Center</a>       </li> */}
            <label for="dog-names"></label>
            <select style={{ fontSize: "18px"  ,width:"80px"}} name="more" id="more">
              <option value="none" selected hidden disabled>More</option>
              <option value="security">Security</option>
              <option value="testimonial">Testimonial</option>
              <option value="questions/contactUs">Questions/Contact Us</option>
            </select>


          </ul>

        </nav>



      </div>

    </header>


  </>

}