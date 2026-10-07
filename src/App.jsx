import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {

    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {

      const userData = JSON.parse(loggedInUser)

      setUser(userData.role)
      setLoggedInUserData(userData.data)

    }

  }, [])

  const handleLogin = (email, password) => {

    // ADMIN LOGIN
    if (email === 'admin@me.com' && password === '123') {

      setUser('admin')

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'admin'
        })
      )

      return
    }

    // EMPLOYEE LOGIN
    const employee = userData?.find(
      (e) => e.email === email && e.password === password
    )

    if (employee) {

      setUser('employee')
      setLoggedInUserData(employee)

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'employee',
          data: employee
        })
      )

      return
    }

    // INVALID LOGIN
    alert('Invalid Credentials')
  }

  return (
    <>
      {!user && (
        <Login handleLogin={handleLogin} />
      )}

      {user === 'admin' && (
        <AdminDashboard changeUser={setUser} />
      )}

      {user === 'employee' && loggedInUserData && (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      )}
    </>
  )
}

export default App