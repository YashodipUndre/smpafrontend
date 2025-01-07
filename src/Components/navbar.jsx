import "../css/navbar.css"
import logo from '../img/icons8-social-media-marketing-100 (3).png'
const Navbar = () => {
    return (
      <nav>
             <div className="logo">
                <img src={logo} alt="" />
             </div>
            <div className="navbar-header">
              <a href="#" className="navbar-brand">
                SMPA
              </a>
            </div>
            <div className="navbar-collapsecollapse">
              <ul className="navnavbar-navnavbar-right">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
              </ul>
            </div>
      </nav>
    );
  };
  export default Navbar;
  