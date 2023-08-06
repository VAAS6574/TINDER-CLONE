import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Mssg.css';
function Mssg({name,message,profilePic,timestamp}) {
  return (
    <div className='mssg'>
      <AccountCircleIcon className='mssg__image' src = {profilePic} />
      <div className='mssg__details'>
      <h2> {name}</h2>
      <p> {message} </p>
      </div>
    <p className='mssg__time'> {timestamp}</p>
    </div>
  )
}

export default Mssg
