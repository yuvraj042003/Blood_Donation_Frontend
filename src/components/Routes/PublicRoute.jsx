import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types';
const PublicRoute = ({children}) => {
  if(localStorage.getItem('token')){
    return <Navigate to='/'/>
  }else{
    return children
  }
}
PublicRoute.propTypes = {
  children: PropTypes.node.isRequired, 
};
export default PublicRoute