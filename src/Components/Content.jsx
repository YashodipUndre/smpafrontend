import React, { useState } from "react";
import "../css/Home.css";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import Loader from "./loader.jsx";
import Dashboard from "./ResultBox.jsx";
import { useResult } from "../context/ResultContext.jsx";

const Content = () => {
    const [result, setResult] = useResult("");
    const [imageFile, setImageFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file || !file.type.startsWith("image/")) {
            toast.error("Please upload a valid image file.");
            return;
        }
        setImageFile(file);
        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!imageFile) {
            toast.error("Please upload an image.");
            return;
        }

        setIsLoading(true);
        const formdata = new FormData();
        formdata.append("image", imageFile);

        try {
            const response = await axios.post("http://localhost:8000/ML", formdata, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success("Uploaded successfully!");
            setResult(response.data.gemini_summary);
            //console.log(response.data.gemini_summary);
        } catch (error) {
            console.log(error);
            console.error("Upload failed:", error);
            toast.error(error.response?.data?.message || "Upload failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Toaster />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="input"
                        required
                    />
                    <button type="submit" className="button">
                        Check Content
                    </button>
                </form>

                {previewUrl && (
                    <img
                        src={previewUrl}
                        alt="Preview"
                        style={{ width: "350px", height: "200px", marginTop: "10px" }}
                    />
                )}

                {isLoading ? (
                    <div className="Spinner">
                        <Loader />
                    </div>
                ) : (
                    <div className="MainMenu">
                        <Dashboard />
                    </div>
                )}
            </div>
        </>
    );
};

export default Content;
