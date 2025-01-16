import React, { useState } from "react";
import "../css/Home.css"; // Import the CSS file
import { Toaster, toast } from "react-hot-toast";
import axios from 'axios';
import Loader from "./loader.jsx";
import  Dashboard  from './ResultBox.jsx';
import { useResult } from "../context/ResultContext.jsx";


const Home = () => {
  const [result,setResult] = useResult("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
 
  function handleclick(e){
     if(e.target.id=='btn1'){
      document.getElementById(e.target.id).style.backgroundColor='white';
      document.getElementById('btn2').style.backgroundColor='#637cf7';
     }
     else{
      document.getElementById(e.target.id).style.backgroundColor='white';
      document.getElementById('btn1').style.backgroundColor='#637cf7';
     }
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    let Aidata;
    if (text) {
       toast.success('Uploaded succesfully');
       try{
          Aidata= await axios.post('https://smpabackend.onrender.com/AIDATA',{
          data:text,
          
        },{
          withCredentials:true
        })
       }
       catch(e){
        toast.error(e);
       }
       finally{
        setIsLoading(false);
        setResult(Aidata.data);
        console.log(result);
       }
       
    } else {
        toast.error("Please fill out both fields.");
    }
  };

  return (
    <>
    <div><Toaster></Toaster></div>
    <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="textfield"
            placeholder="Enter Post Type "
            value={text}
            onChange={handleTextChange}
            className="input"
            required
          />
           <button type="submit" className="button" onClick={handleSubmit}>
            Ask AI
          </button>
        </form>
      {isLoading ?(
          <div className="Spinner">
            <Loader></Loader>
          </div>):
          <>
          <div className="MainMenu">
          <Dashboard></Dashboard>
           </div>
          </>
           }
    </div>
    </>
  );
};

export default Home;
