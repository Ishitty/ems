import React from 'react'
import Header from '../other/Header'
import TaskNum from '../other/TaskNum'
import Tasklist from '../../TaskList/Tasklist'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskNum data={props.data}/>
            <Tasklist data={props.data}/>
    </div>
  )
}
 
export default EmployeeDashboard