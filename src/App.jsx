import React from 'react';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import "./App.css"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Donar from './pages/Dashboard/Donar';
import Hospitals from './pages/Dashboard/Hospitals';
import OrgnisationPage from './pages/Dashboard/OrgnisationPage';
import Consumer from './pages/Dashboard/Consumer';
import Donation from './pages/Donation';
import Analytics from './pages/Dashboard/Analytics';
import DonarList from './pages/Admin/DonarList';
import AdminHome from './pages/Admin/AdminHome';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
      <Route path='/analytics' element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } />
      <Route path='/donation' element={
          <ProtectedRoute>
            <Donation />
          </ProtectedRoute>
        } />
      <Route path='/consumer' element={
          <ProtectedRoute>
            <Consumer />
          </ProtectedRoute>
        } />
      <Route path='/orgnaisation' element={
          <ProtectedRoute>
            <OrgnisationPage />
          </ProtectedRoute>
        } />
        <Route path='/home-admin' element={
          <ProtectedRoute>
            <AdminHome />
          </ProtectedRoute>
        } />
        <Route path='/donar-list' element={
          <ProtectedRoute>
            <DonarList />
          </ProtectedRoute>
        } />
        <Route path='/org-list' element={
          <ProtectedRoute>
            <OrgnisationPage />
          </ProtectedRoute>
        } />
        <Route path='/hospital-list' element={
          <ProtectedRoute>
            <Hospitals />
          </ProtectedRoute>
        } />
      <Route path='/hospital' element={
          <ProtectedRoute>
            <Hospitals />
          </ProtectedRoute>
        } />
      <Route path='/donar' element={
          <ProtectedRoute>
            <Donar />
          </ProtectedRoute>
        } />
        <Route path='/' element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path='/register' element={
          <PublicRoute>
            <Register />
          </PublicRoute>} />
        <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>} />
      </Routes>
    </>
  )
}

export default App
