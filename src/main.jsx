import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import AuthContext from './context/AuthContext.jsx'
// import TaskContext from './context/TaskContext.jsx'
import AuthProvider from './context/AuthProvider.jsx'

// localStorage.clear() 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <AuthContext>
        <TaskContext> */}
        <AuthProvider>
           <App />
        </AuthProvider>
      {/* </TaskContext>
    </AuthContext> */}
  </React.StrictMode>
)
