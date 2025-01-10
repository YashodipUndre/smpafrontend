import "../css/navbar.css"
import logo from '../img/icons8-logo-120.png'
import ailogo from '../img/icons8-chatgpt-120.png'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const history = useNavigate();
  return (
    <nav>
      <div className="navbar-header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <a href="#" className="navbar-brand">
          SocialSphere
        </a>
      </div>
      <div className="navbar-collapsecollapse">
        <div className="navbar-a">
        <a href="/">Home</a>
        <a href="">About Us</a>
        </div>
      </div>
      <div class='last_block'>
        <button onClick={()=>{history('/Home')}}style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>Generate<img src={ailogo} alt="" style={{width:'20px',height:'20px',marginLeft:'-20px'}} /></button>
      </div>
    </nav>
  );
};
export default Navbar;
