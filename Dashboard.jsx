import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar_shison";
const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toVerify = () => {
    window.location.href = "/verify";
  };

  const toView = () => {
    window.location.href = "/view";
  };


  const toDM = () => {
    window.location.href = "/DocumentManagement";
  };
 
  var [recentCertificates] = useState([
    { owner: "Wong Tai Man", userAddress: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", state: "Active", deployTime: "2024-01-01", certificateName: "Graduation Certificate" },
    { owner: "Chan Tai Man", userAddress: "", state: "Inactive", deployTime: "2024-01-01", certificateName: "Graduation Certificate" },
    { owner: "Wong Tai Man", userAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", state: "Active", deployTime: "2024-01-01", certificateName: "Graduation Certificate" },
    { owner: "Chan Tai Man", userAddress: "", state: "Inactive", deployTime: "2024-01-01", certificateName: "Graduation Certificate" },
    { owner: "Wong Tai Man", userAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", state: "Active", deployTime: "2024-01-01", certificateName: "Graduation Certificate" },
    { owner: "Wong Tai Man", userAddress: "0x1281B0Fa3b844Bc454e4438f44e12828e676c326", state: "Active", deployTime: "2024-01-01", certificateName: "Graduation Certificate" },
    { owner: "Wong Tai Man", userAddress: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326", state: "Active", deployTime: "2024-01-01", certificateName: "Graduation Certificate" }
  ]);
  recentCertificates = recentCertificates.slice(0, 5);

  var [recentVer] = useState([
    { owner: "Wong Tai Man", userAddress: "hislnmdns342hoehip", orgName:"UCLA",disableTime:"09:00:23 5-3-2025" ,certificateName: "Graduation Certificate" },
    { owner: "Chan Tai Man", userAddress: "hislnmdns342hoehip", orgName:"HKCU",disableTime:"09:00:23 5-3-2025" ,certificateName: "Graduation Certificate"  },
    { owner: "Wong Tai Man", userAddress: "hislnmdns86ihoehip", orgName: "NYU",disableTime:"09:00:23 5-3-2025" ,certificateName: "Graduation Certificate" },
  ])

  recentVer = recentVer.slice(0, 3);

  var [search] = useState([
    { owner: "Wong Tai Man", userAddress: "hislnmdns342hoehip",deplyTime:"09:00:23 5-3-2025" ,certificateName: "Graduation Certificate" },
    
  ]);

  const cert ={owner:"HKMU",userAddress:"0x742d35Cc6634C0532925a3b844Bc454e4438f44e"}

  const Usercard = ({ user }) => {
    return (
      <div className="card-body position-relative z-index-1 p-3">
        <h6 id="address" className="text-white mt-4 mb-5 pb-2">
          {user.userAddress}
        </h6>
        <div className="d-flex">
          <div className="d-flex">
            <div className="me-4">
              <p className="text-white text-sm opacity-8 mb-0">User Name</p>
              <h6 className="text-white mb-0">{user.owner}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const data = { activenum: 142, inactivenum: 20 };

  return (
    <div className="g-sidenav-show bg-gray-100">
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg" style={{ marginLeft: '50px' }}>
        <div className="container-fluid py-2">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-xl-6 mb-xl-0 mb-4">
                  <div className="card bg-transparent shadow-xl">
                    <div className="overflow-hidden position-relative border-radius-xl">
                      <span className="mask bg-gradient-dark opacity-10"></span>
                      <Usercard user={cert} />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <div className="card" onClick={toDM}>
                        <div className="card-header mx-4 p-3 text-center">
                          <div className="icon icon-shape icon-lg bg-gradient-dark shadow text-center border-radius-lg">
                            <span
                              style={{ paddingTop: '10px' }}>
                              &#128203;
                            </span>
                          </div>
                        </div>
                        <div className="card-body pt-0 p-3 text-center" >
                          <h6 className="text-center mb-0">Active</h6>
                          <hr className="horizontal dark my-3" />
                          <h5 className="mb-0 color-black">{data.activenum}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="card" onClick={toDM}>
                        <div className="card-header mx-4 p-3 text-center">
                          <div className="icon icon-shape icon-lg bg-gradient-dark shadow text-center border-radius-lg">
                            <span
                              style={{ paddingTop: '10px' }}>
                              &#128195;
                            </span>
                          </div>
                        </div>
                        <div className="card-body pt-0 p-3 text-center" >
                          <h6 className="text-center mb-0">Inactive</h6>
                          <hr className="horizontal dark my-3" />
                          <h5 className="mb-0 color-black">{data.inactivenum}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-lg-0 mb-4">
                  <div className="card mt-4">
                    <div className="card-header pb-0 p-3">
                      <div className="row">
                        <div className="col-6 d-flex align-items-center">
                          <h6 className="mb-0">Verify certificate</h6>
                        </div>
                        <div className="col-6 text-end">
                          <button className="btn bg-gradient-dark mb-0" onClick={toVerify}>Verify Now</button>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-md-6 mb-md-0 mb-4">
                          <div style={{ display: 'flex' }}>
                            <input type="file" />
                            <p>PDF file only</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-header pb-0 p-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0">Recent Certificates</h6>
                    </div>
                    <div className="col-6 text-end">
                      <button className="btn btn-outline-primary btn-sm mb-0" onClick={toDM}>View/Update</button>
                    </div>
                  </div>
                </div>
                <div className="card-body p-3 pb-0">
                  <ul className="list-group">
                    {/*Recent Certification*/}
                    {recentCertificates.map(cert => (
                      <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                        <div className="d-flex flex-column" style={{maxWidth:'50%'}}>
                          <h6 className="mb-1 text-dark font-weight-bold text-sm">{cert.owner}</h6>
                          <span className="text-xs">{cert.userAddress}</span>
                        </div>
                        <div className="d-flex align-items-center text-sm" >
                          {cert.state}
                          <h6 className="text-dark text-sm mb-0 px-0 ms-4">{cert.deployTime}</h6>
                        </div>
                      </li>
                    ))}
                    {/* Repeat similar list items for other entries */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 mt-4">
              <div className="card">
                <div className="card-header pb-0 px-3">
                  <h6 className="mb-0">Recent Verifications</h6>
                </div>
                <div className="card-body pt-4 p-3">
                  <ul className="list-group">
                    {/*Recent Verfication*/}
                    {recentVer.map(cert => (
                      <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                      <div className="d-flex flex-column">
                        <h6 className="mb-3 text-sm">{cert.owner}</h6>
                        <div style={{ justifyContent: 'space-between' }}>
                          <div>
                            <span className="mb-2 text-xs">
                              Expire Time: <span className="text-dark ms-sm-2 font-weight-bold">{cert.disableTime}</span>
                            </span>
                          </div>
                          <div>
                            <span className="mb-2 text-xs">
                              Certified By: <span className="text-dark ms-sm-2 font-weight-bold">{cert.orgName}</span>
                            </span>
                          </div>
                          <div>
                            <span className="text-xs">
                              Description: <span className="text-dark ms-sm-2 font-weight-bold">{cert.certificateName}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="ms-auto text-end">
                        <button className="btn btn-link text-dark px-3 mb-0" onClick={toView}>Details</button>
                      </div>
                    </li>
                    ))}
                    {/* Repeat similar list items for other entries */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-4">
              <div className="card h-100 mb-4">
                <div className="card-header pb-0 px-3">
                  <div className="row">
                    <div className="col-md-4">
                      <h6 className="mb-0">Find Certificate</h6>
                    </div>
                    <div className="col-md-8 d-flex justify-content-start justify-content-md-end align-items-center">
                      <input
                        type="text"
                        placeholder="Name"
                        style={{ borderRadius: '10px', color: 'black', padding: '5px', marginRight: '10px' }}
                      />
                      <button className="btn bg-gradient-dark mb-0">Search</button>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-4 p-3">
                  <ul className="list-group">
                    {/* SEARCH */}
                    {search.map(cert => (
                      <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">{cert.owner}</h6>
                          <span className="text-xs">{cert.userAddress}</span>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-1 text-dark text-sm">{cert.certificateName}</h6>
                      </div>
                      <div id="date">
                        <p>{cert.deployTime}</p>
                      </div>
                      <div className="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                        <p onClick={toView}>Details</p>
                      </div>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*footer of template provider*/}
          <footer className="footer py-4">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-start">
                    © {new Date().getFullYear()}, made with <i className="fa fa-heart"></i> by
                    <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank" rel="noopener noreferrer">
                      Creative Tim
                    </a>
                    for a better web.
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank" rel="noopener noreferrer">
                        Creative Tim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank" rel="noopener noreferrer">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/blog" className="nav-link text-muted" target="_blank" rel="noopener noreferrer">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target="_blank" rel="noopener noreferrer">
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;