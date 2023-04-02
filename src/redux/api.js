import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async ()=>{
    const contactsList = await  axios.get("/contacts").then(el=>el.data)
    return contactsList;
  }
)

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (userData)=>{
    await axios.post("/contacts",{
      ...userData
    })
  }
)

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id)=>{
    await axios.delete(`/contacts/${id}`)
  }
)
