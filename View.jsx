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

    var data={ 
        owner: 'Wong Tai Man', 
        userAddress: 'hislnmdns342hoehip',
        version:'v1.1',
        disableTime:'09:00:23 5-3-2025' ,
        certificateName: 'Graduation Certificate',
        state:'Active',
        deployTime:'09:00:23 5-3-2024'
    };

    const Show =({cert})=>{
        return(
            <div className='card' style={{ width:'50%',height:'50%', padding: '30px', marginTop: '50px', borderRadius: '20px', justifyContent:'left'}}>
                    <h1 style={{alignSelf:'center'}}>View Document</h1>
                    <p><strong>Document Name:</strong> {cert.certificateName}</p>
                    <p><strong>Version:</strong>{cert.version}</p>
                    <p><strong>Disable time:</strong> {cert.disableTime}</p>
                    <p><strong>Status:</strong> {cert.state}</p>
                    <p><strong>Upload Date:</strong> {cert.deployTime}</p>

                    <div className="document-content">
                        <p>This is the content of the document...</p>
                    </div>
                    

                    <a className="button back-button" onclick={toDM}>Back</a>
                </div>
        );
    }

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
                <Show cert={data}/>
            </div>
        </div >
    );
};

export default View;