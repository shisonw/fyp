import React, { useState } from 'react';
import Sidebar from "./Sidebar_shison";
const Update = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const toUpload = () => {
        window.location.href = "/upload";
    };

    const toVerify = () => {
        window.location.href = "/verify";
    };

    const toView = () => {
        window.location.href = "/view";
    };

    const toSettings = () => {
        window.location.href = "/settings";
    };

    const toDM = () => {
        window.location.href = "/DocumentManagement";
    };

    const toDashboard = () => {
        window.location.href = "/";
    };

    const [formData, setFormData] = useState({
        certificateName: "",
        action: "",
        version: "",
        content: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData, // Spread the previous state
            [name]: value, // Update the specific field
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Data: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <div>


            {/* Sidebar */}
            <Sidebar />

            <div
                className="container"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',  // Center content horizontally
                    justifyContent: 'left', // Center content vertically
                    height: '100vh', // Full viewport height
                    textAlign: 'left', // Ensure text is centered
                }}
            >
                <div className='card' style={{ padding: '30px', marginTop: '50px', borderRadius: '20px' }}>
                    <h1>Upload/Update Document</h1>
                    <label style={{ fontSize: '20px' }}>Document Name: </label>

                    <input
                        type="text"
                        name="certificateName"
                        value={formData.certificateName}
                        onChange={handleInputChange}
                    /><br />

                    <label style={{ fontSize: '20px' }}>Version: </label>
                    <input
                        type="text"
                        name="version"
                        value={formData.version}
                        onChange={handleInputChange}
                    /><br />
                    <label style={{ fontSize: '20px', paddingRight: '30px' }}>
                        This is an
                        <select style={{ fontSize: '15px', marginLeft: '20px' }} name="action" value={formData.action} onChange={handleInputChange}>
                            <option>Update</option>
                            <option>Upload</option>
                        </select>
                    </label><br />
                    <label style={{ fontSize: '20px' }}>Content: </label>

                    <textarea rows="5" placeholder='This is the content of the document...'
                        type="text"
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                    ></textarea><br />

                    {/*JSON of this page's input*/}

                    {JSON.stringify(formData, null, 2)}

                    <a href="/" className="button save-button" >Save</a><br />
                    <a href="/" className="button back-button" >Cancel</a>
                </div>
            </div>
        </div>
    );
};

export default Update;