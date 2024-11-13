import React from 'react';
import * as FaIcons from 'react-icons/fa6';


function NavButton() {
  return (
    <div>
      <div className=''>
        <input type='search' />
        <FaIcons.FaSearchengin/>
      </div>
      <div className='dropdown'>
        <button type='button'><FaIcons.FaPowerOff /></button>
        <ul>
          <li className='dropdown-items'><a href='/'>Portal</a></li>
          <li className='dropdown-items'><a href='/'>Admin</a></li>
          <li className='dropdown-items'><a href='/'>Staff</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavButton
