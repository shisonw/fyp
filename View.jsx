import React, { useState } from 'react';
import Sidebar from "./Sidebar_shison";
const View = () => {
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
        window.location.href = "/documentmanagement";
    };

    const toDashboard = () => {
        window.location.href = "/";
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
                    alignItems: 'center',  // Center content horizontally
                    justifyContent: 'top', // put content on top section
                    height: '100vh', // Full viewport height
                    textAlign: 'left' // Ensure text is centered
                }}
            >
                <div className='card' style={{ width:'50%',height:'50%', padding: '30px', marginTop: '50px', borderRadius: '20px', justifyContent:'left'}}>
                    <h1 style={{alignSelf:'center'}}>View Document</h1>
                    <p><strong>Document Name:</strong> Sample Document 1</p>
                    <p><strong>Version:</strong> v1.0</p>
                    <p><strong>Status:</strong> ✅ Certified</p>
                    <p><strong>Upload Date:</strong> 2024-01-01</p>

                    <div className="document-content">
                        <p>This is the content of the document...</p>
                    </div>

                    <a href="/" className="button back-button" onclick={toDM}>Back</a>
                </div>
            </div>
        </div >
    );
};

export default View;