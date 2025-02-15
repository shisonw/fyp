import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DocumentManagement from './DocumentManagement';
import Certify from './Certify';
import Update from './Update';
import View from './View';
import Dashboard from './Dashboard';
import './nucleo-svg.css';
import './nucleo-icons.css';
import './material-dashboard.min.css';
import './material-dashboard.css.map';
import './material-dashboard.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/DocumentManagement" element={<DocumentManagement />} />
                <Route path="/view" element={<View />} />
                <Route path="/upload" element={<Update />} />
                <Route path="/certify" element={<Certify />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;