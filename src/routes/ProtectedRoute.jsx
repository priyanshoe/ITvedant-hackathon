import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const token = localStorage.getItem("role")
    setUser(token)
    setLoading(false)
}, []);
  if(loading) return <h1>Loading...</h1>
  // const token = localStorage.getItem("token")
  
    return user
    ? children
    :<Navigate to="/login" replace/>
}

export default ProtectedRoute