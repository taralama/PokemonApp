import React from 'react'
import Navbar from '../Components/Navbar'
import bird from '../Images/History/bird.png'
import vs from '../Images/Battle/VsIcon.png'
import ninetale from '../Images/History/Ninetales.png'
import winner from '../Images/History/Winner.png'
import line from '../Images/History/Line.png'


const History = () => {
  return (
    <><div className=" h-screen bg-customBlue    text-white pt-8 ">
    <Navbar/>
    <div className='mt-5 mx-10 flex items-end'>
    <h1 className='text-3xl font-kanit'>Battle History</h1>
    <p className='text-lightBlue ml-1 font-kanit'>(234 battles)</p>
    </div>
    <div>
    <div className=' justify-center p-6  h-96 mx-10 mt-5 bg-historyBlue rounded-xl'>
        <div className='flex p-2 border-borderBlue border rounded-xl justify-between items-center font-kanit'>
            <div>1.</div>
            <div><p className='text-lightBlue'>Date</p><h1>16 Mar 2023</h1></div>
            <div><p className='text-lightBlue'>Time</p> <h1>3:00 PM</h1></div>
            <div><img src={line} alt="" /></div>
            <div><img className='h-15' src={bird} alt="" /></div>
            <div><h1>Pidgeot</h1></div>
            <div><img className='h-14' src={vs} alt="" /></div>
            <div><h1>Ninetales</h1></div>
            <div><img src={ninetale} alt="" /></div>
            <div><img  src={line} alt="" /></div>
            <div><h1 >Winner</h1></div>
            <div><img src={winner} alt="" /></div>
            <div><img src={ninetale} alt="" /></div>
        </div>
    </div>
    </div>
    </div></>
  )
}

export default History