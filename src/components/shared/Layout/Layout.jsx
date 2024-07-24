import React from 'react'
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../../styles/Sidebar.css'
const Layout = ({ children }) => {
    return (
        <>
            <div className='header'><Header/></div>
            <div className='row g-0'>
                <div className='col-md-3'><Sidebar /></div>
                <div className='col-md-9'>{children}</div>
            </div>
            
        </>
    )
}

export default Layout
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};