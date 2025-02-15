import React, { useState } from 'react';

const Update = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const toUpload = () => {
        window.location.href = "/upload";
    };

    const toVerify = () => {
        window.location.href = "/certify";
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

    return (
        <div>
            <header id="header" className="header">
                <div className="row" style={{ justifyContent: 'space-between', width: '98%', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                        {/* Menu icon to toggle sidebar */}
                        <span
                            style={{ fontSize: '30px', cursor: 'pointer', color: 'black', marginLeft: '10px', paddingTop: '3px' }}
                            onClick={toggleSidebar}
                        >
                            &#9776;
                        </span>
                        <p className="pageName" style={{ color: 'rgba(0, 0, 0, 0.375)', alignSelf: 'center', paddingLeft: '10px' }}>/Update</p>
                    </div>
                    <div style={{ fontSize: '20px' }}>
                        <span className="material-symbols-outlined"></span>
                        <span className="material-symbols-outlined"></span>
                        <span className="material-symbols-outlined"></span>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <aside
                id="sidebar"
                className="sidenav"
                style={{ position: 'fixed',left: isSidebarVisible ? '0' : '-250px' }} // Toggle visibility
            >
                <div className="sidenav-header">
                    <div className="row d-flex" style={{ alignItems: 'center', paddingLeft: '10px', flexWrap: 'nowrap' }}>
                        <img id="profile_pic" src="profile.png" width="50px" height="50px" alt="" style={{ paddingRight: '10px' }} />
                        <h5>Hong Kong Metropolitan University</h5>
                    </div>
                </div>
                <ul className="sidebar-list">
                    <li className="functions" onClick={toDashboard}>
                        <h3>Dashboard</h3>
                        <span className="material-icons-outlined">dashboard</span>
                    </li>
                    <li className="functions" onClick={toDM}>
                        <h3>Document Management</h3>
                        <span className="material-icons-outlined">document management page</span>
                    </li>
                    <li className="functions" onClick={toUpload}>
                        <h3>Upload Certificate</h3>
                        <span className="material-icons-outlined">upload_file</span>
                    </li>
                    <li className="functions" onClick={toVerify}>
                        <h3>Verify Certificate</h3>
                        <span className="material-icons-outlined">verified</span>
                    </li>
                    <li className="functions" onClick={toView}>
                        <h3>View Certificate</h3>
                        <span className="material-icons-outlined">view</span>
                    </li>
                    <li className="functions" onClick={toSettings}>
                        <h3>Settings</h3>
                        <span className="material-icons-outlined">settings</span>
                    </li>
                </ul>
            </aside>

            <div 
            className="container"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',  // Center content horizontally
                justifyContent: 'center', // Center content vertically
                height: '100vh', // Full viewport height
                textAlign: 'center', // Ensure text is centered
            }}
            >
                <h1>Upload/Update Document</h1>
                <label>Document Name: </label>
                <input type="text" defaultValue="Sample Document 1" /><br/>

                <label>Version: </label>
                <input type="text" defaultValue="v1.0" /><br/>

                <label>Status: </label>
                <select>
                    <option>⏳ Pending</option>
                    <option selected>✅ Certified</option>
                </select><br/>

                <label>Content: </label><br/>
                <textarea rows="5">This is the content of the document...</textarea><br/>

                <a href="/" className="button save-button">Save</a><br/>
                <a href="/" className="button back-button">Cancel</a>
            </div>
        </div>
    );
};

export default Update;