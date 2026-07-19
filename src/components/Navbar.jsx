import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();


  return (

    <nav className="navbar">


      <div 
        className="logo"
        onClick={() => navigate("/")}
      >

        <h2>
          🏛 RuralGov AI
        </h2>

      </div>



      <ul className="nav-links">


        <li>

          <NavLink 
            to="/"
          >
            Home
          </NavLink>

        </li>



        <li>

          <NavLink
            to="/schemes"
          >
            Government Schemes
          </NavLink>

        </li>



        <li>

          <NavLink
            to="/how-it-works"
          >
            How It Works
          </NavLink>

        </li>



        <li>

          <NavLink
            to="/contact"
          >
            Contact
          </NavLink>

        </li>


      </ul>




      <button

        className="nav-btn"

        onClick={() =>
          navigate("/schemes")
        }

      >

        Analyze Application

      </button>



    </nav>

  );

}


export default Navbar;