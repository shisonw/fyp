import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
  
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
            <div className="g-sidenav-show bg-gray-100">
              <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                <div className="container-fluid py-2">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-xl-6 mb-xl-0 mb-4">
                          <div className="card bg-transparent shadow-xl">
                            <div className="overflow-hidden position-relative border-radius-xl">
                              <img
                                src="../assets/img/illustrations/pattern-tree.svg"
                                className="position-absolute opacity-2 start-0 top-0 w-100 z-index-1 h-100"
                                alt="pattern-tree"
                              />
                              <span className="mask bg-gradient-dark opacity-10"></span>
                              <div className="card-body position-relative z-index-1 p-3">
                                <i className="material-symbols-rounded text-white p-2">wifi</i>
                                <h5 className="text-white mt-4 mb-5 pb-2">
                                  4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                                </h5>
                                <div className="d-flex">
                                  <div className="d-flex">
                                    <div className="me-4">
                                      <p className="text-white text-sm opacity-8 mb-0">Card Holder</p>
                                      <h6 className="text-white mb-0">Jack Peterson</h6>
                                    </div>
                                    <div>
                                      <p className="text-white text-sm opacity-8 mb-0">Expires</p>
                                      <h6 className="text-white mb-0">11/22</h6>
                                    </div>
                                  </div>
                                  <div className="ms-auto w-20 d-flex align-items-end justify-content-end">
                                    <img
                                      className="w-60 mt-2"
                                      src="../assets/img/logos/mastercard.png"
                                      alt="logo"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="row">
                            <div className="col-md-6 col-6">
                              <div className="card">
                                <div className="card-header mx-4 p-3 text-center">
                                  <div className="icon icon-shape icon-lg bg-gradient-dark shadow text-center border-radius-lg">
                                    <span className="material-symbols-outlined">fact_check</span>
                                  </div>
                                </div>
                                <div className="card-body pt-0 p-3 text-center">
                                  <h6 className="text-center mb-0">Active</h6>
                                  <hr className="horizontal dark my-3" />
                                  <h5 className="mb-0">2000</h5>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-6">
                              <div className="card">
                                <div className="card-header mx-4 p-3 text-center">
                                  <div className="icon icon-shape icon-lg bg-gradient-dark shadow text-center border-radius-lg">
                                    <i className="material-symbols-rounded opacity-10">account_balance_wallet</i>
                                  </div>
                                </div>
                                <div className="card-body pt-0 p-3 text-center">
                                  <h6 className="text-center mb-0">Inactive</h6>
                                  <hr className="horizontal dark my-3" />
                                  <h5 className="mb-0">45</h5>
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
                                  <h6 className="mb-0">Payment Method</h6>
                                </div>
                                <div className="col-6 text-end">
                                  <a className="btn bg-gradient-dark mb-0" href="javascript:;">
                                    <i className="material-symbols-rounded text-sm">add</i>&nbsp;&nbsp;Add New Card
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-body p-3">
                              <div className="row">
                                <div className="col-md-6 mb-md-0 mb-4">
                                  <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                    <img
                                      className="w-10 me-3 mb-0"
                                      src="../assets/img/logos/mastercard.png"
                                      alt="logo"
                                    />
                                    <h6 className="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h6>
                                    <i
                                      className="material-symbols-rounded ms-auto text-dark cursor-pointer"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit Card"
                                    >
                                      edit
                                    </i>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                    <img
                                      className="w-10 me-3 mb-0"
                                      src="../assets/img/logos/visa.png"
                                      alt="logo"
                                    />
                                    <h6 className="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248</h6>
                                    <i
                                      className="material-symbols-rounded ms-auto text-dark cursor-pointer"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit Card"
                                    >
                                      edit
                                    </i>
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
                              <h6 className="mb-0">Invoices</h6>
                            </div>
                            <div className="col-6 text-end">
                              <button className="btn btn-outline-primary btn-sm mb-0">View All</button>
                            </div>
                          </div>
                        </div>
                        <div className="card-body p-3 pb-0">
                          <ul className="list-group">
                            <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                              <div className="d-flex flex-column">
                                <h6 className="mb-1 text-dark font-weight-bold text-sm">March, 01, 2020</h6>
                                <span className="text-xs">#MS-415646</span>
                              </div>
                              <div className="d-flex align-items-center text-sm">
                                $180
                                <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                                  <i className="material-symbols-rounded text-lg position-relative me-1">
                                    picture_as_pdf
                                  </i>{' '}
                                  PDF
                                </button>
                              </div>
                            </li>
                            {/* Repeat for other list items */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-7 mt-4">
                      <div className="card">
                        <div className="card-header pb-0 px-3">
                          <h6 className="mb-0">Billing Information</h6>
                        </div>
                        <div className="card-body pt-4 p-3">
                          <ul className="list-group">
                            <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                              <div className="d-flex flex-column">
                                <div id="user"></div>
                              </div>
                              <div className="ms-auto text-end">
                                <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;">
                                  <i className="material-symbols-rounded text-sm me-2">delete</i>Delete
                                </a>
                                <a className="btn btn-link text-dark px-3 mb-0" href="javascript:;">
                                  <i className="material-symbols-rounded text-sm me-2">edit</i>Edit
                                </a>
                              </div>
                            </li>
                            {/* Repeat for other list items */}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 mt-4">
                      <div className="card h-100 mb-4">
                        <div className="card-header pb-0 px-3">
                          <div className="row">
                            <div className="col-md-6">
                              <h6 className="mb-0">Your Transaction's</h6>
                            </div>
                            <div className="col-md-6 d-flex justify-content-start justify-content-md-end align-items-center">
                              <i className="material-symbols-rounded me-2 text-lg">date_range</i>
                              <small>23 - 30 March 2020</small>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-4 p-3">
                          <h6 className="text-uppercase text-body text-xs font-weight-bolder mb-3">Newest</h6>
                          <ul className="list-group">
                            <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                              <div className="d-flex align-items-center">
                                <button className="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                                  <i className="material-symbols-rounded text-lg">expand_more</i>
                                </button>
                                <div className="d-flex flex-column">
                                  <h6 className="mb-1 text-dark text-sm">Netflix</h6>
                                  <span className="text-xs">27 March 2020, at 12:30 PM</span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                                - $ 2,500
                              </div>
                            </li>
                            {/* Repeat for other list items */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="footer py-4">
                    <div className="container-fluid">
                      <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                          <div className="copyright text-center text-sm text-muted text-lg-start">
                            © {new Date().getFullYear()}, made with <i className="fa fa-heart"></i> by
                            <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank" rel="noopener noreferrer">
                              Creative Tim
                            </a>{' '}
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
                            {/* Repeat for other nav items */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
              </main>
              <div className="fixed-plugin">
                <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
                  <i className="material-symbols-rounded py-2">settings</i>
                </a>
                <div className="card shadow-lg">
                  <div className="card-header pb-0 pt-3">
                    <div className="float-start">
                      <h5 className="mt-3 mb-0">Material UI Configurator</h5>
                      <p>See our dashboard options.</p>
                    </div>
                    <div className="float-end mt-4">
                      <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                        <i className="material-symbols-rounded">clear</i>
                      </button>
                    </div>
                  </div>
                  <hr className="horizontal dark my-1" />
                  <div className="card-body pt-sm-3 pt-0">
                    {/* Sidebar Backgrounds and other content */}
                  </div>
                </div>
              </div>
            </div>
          );
        };
        
        export default Dashboard;