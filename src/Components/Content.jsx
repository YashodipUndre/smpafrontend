import React, { useState } from "react";
import "../css/Home.css"; // Import the CSS file
import { Toaster, toast } from "react-hot-toast";
import axios from 'axios';
import Loader from "./loader.jsx";
import Dashboard from './ResultBox.jsx';
import { useResult } from "../context/ResultContext.jsx";
const url = process.env.BACKEND_URL;

const Content = () => {
    const [result, setResult] = useResult("");
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function handleclick(e) {
        if (e.target.id == 'btn1') {
            document.getElementById(e.target.id).style.backgroundColor = 'white';
            document.getElementById('btn2').style.backgroundColor = '#637cf7';
        }
        else {
            document.getElementById(e.target.id).style.backgroundColor = 'white';
            document.getElementById('btn1').style.backgroundColor = '#637cf7';
        }
    }

    const handleImageUpload = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        if (!image) {
            toast.error("Please upload an image.");
            setIsLoading(false);
            return;
        }
    
        const formdata = new FormData();
        formdata.append('image', image);
    
        try {
            const response = await axios.post('http://localhost:8080/Content', formdata, {
                headers: { "Content-Type": "multipart/form-data" },
            });
    
            toast.success('Uploaded successfully');
            setResult(response.data);  // ✅ Ensure result is set only on success
            console.log(response.data);
        } catch (error) {
            console.error("Upload failed:", error);
            toast.error(error.response?.data?.message || "Upload failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <>
            <div><Toaster></Toaster></div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="input"
                        color="white"
                        required
                    />

                    <button type="submit" className="button" onClick={handleSubmit}>
                        Check Content
                    </button>
                </form>
                {image && <img src={image} alt="Preview" style={{ width: "350px", marginTop: "0px", height: "200px" }} />}
                {isLoading ? (
                    <div className="Spinner">
                        <Loader></Loader>
                    </div>) :
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

export default Content;
