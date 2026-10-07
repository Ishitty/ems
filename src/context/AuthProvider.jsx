import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState([])

  useEffect(() => {

    const data = getLocalStorage()

    if (data && data.employees && data.employees.length > 0) {
      setUserData(data.employees)
    } else {
      setLocalStorage()

      const newData = getLocalStorage()

      setUserData(newData.employees || [])
    }

  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider