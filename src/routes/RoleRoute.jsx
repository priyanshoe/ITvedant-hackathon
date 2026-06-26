import React from 'react'
import { Navigate } from 'react-router-dom'

function RoleRoute({children,role}) {
    const userRole = localStorage.getItem('role')
    // const userRole = "student"
    if(userRole!==role) {
        return <Navigate to="/login" replace/>
    }
    return children
}

export default RoleRoute