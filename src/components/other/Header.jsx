
import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
  }

  const firstName = props.data?.firstName || 'Admin'

  return (
    <div className='flex justify-between items-end'>

      <h1 className='text-2xl font-medium'>
        Hello <br />

        <span className='text-3xl font-semibold'>
          {firstName} 👋
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium active:scale-95 hover:text-black'
      >
        Log Out
      </button>

    </div>
  )
}

export default Header
