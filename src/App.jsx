import React from 'react'
import Background from './component/Background'
import Foreground from './component/Foreground'
const App =()=>{
  return (
   <>
    <div className='bg-zinc-800 w-full h-screen'>
    <Background/>
    <Foreground/>
    </div>
   </>
  )
}

export default App
