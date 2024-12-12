import React from 'react'
import dance from '../Image/Dance.png'
import  './Home.css'
import Signup from '../Component/Signup'
function Home() {
  return (
    <div className='home'>
     <div className='left'>
      <img src={dance}/>
      <div className='heading'>
      <h1>Discover new things on Superapp</h1>
      </div>
     </div>
     <div className='right'>
      <Signup/>
      </div> 
    </div>
  )
}
export default Home
