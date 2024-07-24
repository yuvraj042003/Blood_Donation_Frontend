import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../../services/api'
import { toast } from 'react-toastify';

// Login
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      //store token
      if (data.success) {

        toast.success(data.message);
        localStorage.setItem("token", data.token);
        window.location.replace("/");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
// Register
export const userRegister = createAsyncThunk('auth/thunk',
  async ({
    e,
    name,
    role,
    email,
    password,
    phone,
    organisationName,
    address,
    hospitalName,
    website
  }, { rejectWithValue }) => {
    try {
      const { data } = await API.post('/auth/register', {
      e,
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website
      })

      if (data.success) {
        toast.success(data.message)
        window.location.replace('/login')
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  })
// GetCurrentUser
export const getCurrentUser = createAsyncThunk('auth/getCurrentUser',
async ({rejectWithValue})=>{
  try {
    const res = await API.get('/auth/current-user')
    if(res?.data){
      return res?.data;
    }
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
})