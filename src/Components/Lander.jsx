import '../css/Lander.css'
import logo from '../img/icons8-logo-120.png'
import landerLogo from '../img/510-5109527_design-de-social-media-hd-png-download (1).png'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Popup from './popup';
function Lander() {
    const history = useNavigate();
    return (
        <>
            <div className="Container">
                <div className="leftsubcontainer">
                    <div className='logoheading'>
                        <img src={logo} alt="" />
                        <h6>SocialSphere</h6>
                    </div>
                    <h1>The Ultimate Tool for Social Media Success</h1>
                    <button class='startbtn' onClick={()=>{history('/Ai')}}>Get started</button>
                    <div className='mid'>
                    <Popup></Popup>
                    </div>
                    <button class='startbtn' onClick={()=>{history('/Content')}}>Analyze Content</button>
                </div>
                <div className="rightsubcontainer">
                    <img src={landerLogo} alt="" />
                </div>
            </div>
        </>
    )
}
export default Lander;