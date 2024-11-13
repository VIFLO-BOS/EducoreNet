import React from 'react';
import Logo from './Logo';
import Navmenu from './Navmenu';
import NavButton from './NavButton';    

function EducorenetNavbar() {
    return (
        <div className='navbar navbar-outline-light flex flex-row justify-content-between align-items-center pl-2 pr-2 width-auto ' id='navbar'>
            <Logo />
            <Navmenu />
            <NavButton />
        </div>
    )
}

export default EducorenetNavbar
