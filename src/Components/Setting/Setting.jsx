import React from 'react'
import './Setting.css'

const Setting = () => {
  return ( 
    <div className='Setting'>
        <div className='s-left'>
        <h3>Settings</h3>
        <div><input type="text" placeholder='Search Settings'/></div>
        <div>Your Account</div>
        <div>Accessibility, display and languages</div>
        <div>Security and account access</div>
        <div>Privacy and safety</div>
        <div>Notifications</div>
        </div>
        <hr />
        <div className='s-right'>
            <div>
              <h1>Your Account</h1>
              <p>See information about your account, download an archive of your data, or learn about your account deactivation options</p>
              <div>Account Information</div>
            </div>
        </div>
    </div>
  )
}

export default Setting