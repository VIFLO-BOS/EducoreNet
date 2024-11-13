import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as FcIcons from 'react-icons/fc';
import * as IoIcons from 'react-icons/io5';

function Navmenu() {
  return (
    <div className='nav-container'>
      <ul className='nav-menu'>
        <li><a href='/'> <MdIcons.MdHome /> Home</a></li>

        <li>
          <div className='dropdown'>
            <a href='/'><MdIcons.MdPerson /> About Us</a>
            <ul className='dropdown-menu'>
              <li><a href='/'>University Overview</a></li>
              <li><a href='/'>Accreditation</a></li>
              <li><a href='/'>Leadership</a></li>
              <li><a href='/'>Campuses</a></li>
              <li><a href='/'>University News</a></li>
            </ul>
          </div>
        </li>

        <li>
          <div className='dropdown'>
            <a href='/'> <FaIcons.FaGraduationCap /> Academics</a>
            <ul className='dropdown-menu'>
              <li><a href='/'>Programs</a></li>
              <li><a href='/'>Faculties/Departments</a></li>
              <li><a href='/'>Admissions</a></li>
              <li><a href='/'>Course Catalogue</a></li>
              <li><a href='/'>Academic Calendar</a></li>
              <li><a href='/'>Research</a></li>
            </ul>
          </div>
        </li>

        <li>
          <div className='dropdown'>
            <a href='/'><MdIcons.MdPeople /> Student Life</a>
            <ul className='dropdown-menu'>
              <li><a href='/'>Clubs and Societies</a></li>
              <li><a href='/'>Housing</a></li>
              <li><a href='/'>Campus Safety</a></li>
              <li><a href='/'>International Student</a></li>
            </ul>
          </div>
        </li>

        <li>
          <div className='dropdown'>
            <a href='/'> <SiIcons.SiKhanacademy /> Admissions</a>
            <ul className='dropdown-menu'>
              <li><a href='/'>Undergraduate Admissions</a></li>
              <li><a href='/'>Graduate Admissions</a></li>
              <li><a href='/'>International Admissions</a></li>
              <li><a href='/'>Financial Aid</a></li>
              <li><a href='/'>Tuition and Fees</a></li>
            </ul>
          </div>
        </li>

        <li>
          <div className='dropdown'>
            <a href='/'><FaIcons.FaResearchgate /> Research</a>
            <ul className='dropdown-menu'>
              <li><a href='/'>Research Institute</a></li>
              <li><a href='/'>Publications</a></li>
              <li><a href='/'>Opportunities</a></li>
            </ul>
          </div>
        </li>

        <li>
          <div className='dropdown'>
            <a href='/'><FcIcons.FcDepartment /> Faculties & Staff</a>
            <ul className='dropdown-menu'>
              <li><a href='/'>Faculty Directory</a></li>
              <li><a href='/'>Employee Services</a></li>
              <li><a href='/'>Human Resources</a></li>
            </ul>
          </div>
        </li>

        <li>
          <div className='dropdown'>
            <a href='/'><FaIcons.FaPeopleCarry /> Alumni</a>
            <ul className='dropdown-menu'>
              <li><a href='/'>Alumni Association</a></li>
              <li><a href='/'>Giving/Donations</a></li>
              <li><a href='/'>Reunions & Events</a></li>
              <li><a href='/'>Alumni Success Stories</a></li>
            </ul>
          </div>
        </li>

        <li>
          <div className='dropdown'>
            <a href='/'><MdIcons.MdContacts /> Contact Us</a>
            <ul className='dropdown-menu'>
              <li><a href='/'>General Inquiries</a></li>
              <li><a href='/'>Campus Map</a></li>
              <li><a href='/'>Directory</a></li>
              <li><a href='/'>Feedback</a></li>
            </ul>
          </div>
        </li>

        <li>
          <div className='dropdown'>
            <a href='/'><FaIcons.FaNewspaper /> News & Events</a>
            <ul className='dropdown-menu'>
              <li><a href='/'>Events Calendar</a></li>
              <li><a href='/'>Newsroom</a></li>
              <li><a href='/'>Social Media</a></li>
            </ul>
          </div>
        </li>

        <li>
          <div className='dropdown'>
            <a href='/'><IoIcons.IoLibrarySharp /> Library</a>
            <ul className='dropdown-menu'>
              <li><a href='/'>Library Services</a></li>
              <li><a href='/'>Online Databases</a></li>
              <li><a href='/'>Catalog Search</a></li>
            </ul>
          </div>
        </li>

        <li>
          <div className='dropdown'>
            <a href='/'><MdIcons.MdBookOnline /> Online Learning</a>
            <ul className='dropdown-menu'>
              <li><a href='/'>E-learning Portal</a></li>
              <li><a href='/'>Learning Management System</a></li>
            </ul>
          </div>
        </li>

        <li>
          <div className='dropdown'>
            <a href='/'><SiIcons.SiGnuprivacyguard/> Legal and Privacy</a>
            <ul className='dropdown-menu'>
              <li><a href='/'>Privacy Policy</a></li>
              <li><a href='/'>Terms of Use</a></li>
              <li><a href='/'>Accessibility</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navmenu;
