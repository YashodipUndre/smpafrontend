import React, { useState } from "react";
import "../css/Home.css"; // Import the CSS file
import { Toaster, toast } from "react-hot-toast";
import axios from 'axios';
import Loader from "./loader.jsx";

const Home = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    if (file && text) {
        const formData = new FormData();
        formData.append('csvfile',file);
        formData.append('text',text);
       toast.success('Uploaded succesfully');
       let data;
       try{
        data  = await axios.post('http://localhost:8080/upload',formData,{
            headers:{
                'Content-Type': 'multipart/form-data',
            }
           });
       }
       catch(e){
        toast.error(e);
       }
       finally{
        setIsLoading(false);
        console.log(data.data);
       }
       
    } else {
        toast.error("Please fill out both fields.");
    }
  };

  return (
    <>
    <div><Toaster></Toaster></div>
    <div className="container">
      <div className="form-container">
        <h2 className="title">SMPA FORM</h2>
        <form onSubmit={handleSubmit}>
            <label className="label" htmlFor="file"style={{color:'white',marginRight:'285px',marginBottom:'20px'}}>Uplaod Dataset</label>
          <input
            type="file"
            name="csvFile"
            accept=".csv"
            onChange={handleFileChange}
            className="input"
            required
            placeholder="Upload Dataset"
            style={{color:'#1DA1F2'}}
          />
          <input
            type="text"
            name="textfield"
            placeholder="Enter Post Type "
            value={text}
            onChange={handleTextChange}
            className="input"
            style={{ background: 'transparent',color:'#1DA1F2'}}
            required
          />
          <button type="submit" className="button" onClick={handleSubmit}>
            Ask AI
          </button>
          {isLoading ?(
          <div className="Spinner" style={{marginLeft:'170px',marginTop:'100px'}}>
            <Loader></Loader>
          </div>):<>
          </>
           }
        </form>
      </div>
    </div>
    </>
  );
};

export default Home;
