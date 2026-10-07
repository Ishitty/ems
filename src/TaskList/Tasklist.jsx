import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className='flex items-center overflow-x-auto justify-start gap-5 flex-nowrap h-[55%] w-full py-5 b mt-10 rounded-lg'>

    {data.tasks.map((elem, idx)=>{
        if(elem.active){
            return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
            return <NewTask key={idx} data={elem}/>
        }
         if(elem.completed){
            return <CompleteTask key={idx} data={elem}/>
        }
         if(elem.failed){
            return <FailedTask key={idx} data={elem}/>
        }
    })}


      
        {/* <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
             
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
             
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
             
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
             
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
             
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
             
        </div> */}
        {/* <AcceptTask />
        <NewTask />
        <CompleteTask />
        <FailedTask /> */}
       
    </div>
    
    
  )
}

export default Tasklist



        //  <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        //     <div className='flex justify-between items-center'>
        //         <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>
        //               High
        //         </h3>
        //         <h4 className='text-base'> 25 Sep 2026</h4>
        //     </div>
        //     <h2 className='mt-5 text-2xl font-semibold'>
        //             Make a youtube video.
        //         </h2>
        //         <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit natus tempora illum architecto, quidem sed.</p>
        // </div>