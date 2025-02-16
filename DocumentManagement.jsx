import React, { useState } from 'react';
import Sidebar from "./Sidebar_shison";
const DocumentManagement = () => {
    const [certificates, setCertificates] = useState([
        { id: 1, name: "Sample Certificate 1", version: "v1.0", status: "✅ Certified", uploadDate: "2024-01-01" },
        { id: 2, name: "Sample Certificate 2", version: "v2.1", status: "⏳ Pending", uploadDate: "2024-02-01" },
    ]);

    const [newCertificate, setNewCertificate] = useState({ name: "", version: "", status: "⏳ Pending" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCertificate({ ...newCertificate, [name]: value });
    };

    const addCertificate = () => {
        if (newCertificate.name && newCertificate.version) {
            const newCert = {
                id: certificates.length + 1,
                name: newCertificate.name,
                version: newCertificate.version,
                status: newCertificate.status,
                uploadDate: new Date().toISOString().split('T')[0],
            };
            setCertificates([...certificates, newCert]);
            setNewCertificate({ name: "", version: "", status: "⏳ Pending" });
        }
    };

    const deleteCertificate = (id) => {
        setCertificates(certificates.filter(cert => cert.id !== id));
    };

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const toUpload = () => { window.location.href = "/upload"; };
    const toVerify = () => { window.location.href = "/verify"; };
    const toView = () => { window.location.href = "/view"; };
    const toSettings = () => { window.location.href = "/settings"; };
    const toDM = () => { window.location.href = "/DocumentManagement"; };
    const toDashboard = () => { window.location.href = "/"; };

    return (
        <div>
            <Sidebar />

            <div className="container" style={{ textAlign: 'center', padding: '20px' }}>
                <h1>Document Management</h1>

                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th>Certificate Name</th>
                            <th>Version</th>
                            <th>Status</th>
                            <th>Upload Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {certificates.map(cert => (
                            <tr key={cert.id}>
                                <td>{cert.name}</td>
                                <td>{cert.version}</td>
                                <td>{cert.status}</td>
                                <td>{cert.uploadDate}</td>
                                <td>
                                    <button className="button blue-button" onclick={toView}>View</button>
                                    <button className="button gray-button" onclick={toUpload}>Update</button>
                                    <button className="button red-button" onClick={() => deleteCertificate(cert.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="upload-section" style={{ marginTop: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '5px' }}>
                    <h3>Add New Certificate</h3>
                    <input type="text" name="name" placeholder="Certificate Name" value={newCertificate.name} onChange={handleInputChange} />
                    <input type="text" name="version" placeholder="Version" value={newCertificate.version} onChange={handleInputChange} />
                    <select name="status" value={newCertificate.status} onChange={handleInputChange}>
                        <option value="⏳ Pending">⏳ Pending</option>
                        <option value="✅ Certified">✅ Certified</option>
                    </select>
                    <button className="button green-button" onClick={addCertificate}>Add Certificate</button>
                </div>
            </div>
        </div>
    );
};

export default DocumentManagement;
