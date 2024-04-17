'use client'

import './Header.css'


import { useState } from 'react';
import TopBar from './TopBar';
import Link from 'next/link';
import { HiOutlineChevronDown, HiOutlineGlobeAlt, HiOutlineSearch, HiOutlineX } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import Container from '@/components/ui/Container';




const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const handleToggle = () => {
    setToggleMenu((toggleMenu) => !toggleMenu)
  }



  return (
    <div>
      <div className='navBarWrap'>
       <div>
       <TopBar />
        <div className='relative'>
          <Container className=''>
            <div className="header">

            <Link href='/'> <h3 className="text-4xl font-bold"> TechZon </h3></Link>
              <div className='hideBar' onClick={handleToggle}>
                <div className={toggleMenu ? `bar` : ` bar activeMenuBar`}>
                  <span className={toggleMenu ? ` ` : `bar1`}></span>
                  <span className={toggleMenu ? ` ` : `bar2`}></span>
                  <span className={toggleMenu ? ` ` : `bar3`}></span>
                </div>
              </div>

        
              <div className='search'>
                <input type="text" placeholder='Search in TechZon' autoComplete='off' />
                <button className='searchIconWrap'><HiOutlineSearch className='searchIcon' /> </button>
              </div>

              <div className="flex items-center space-x-3 loginbtn">
                <div className="onlinShopping">
                  <Link href='/login'> <BsPerson className='personIcon' /></Link>
                </div>
                <div className='flex items-center ml-3 loginbtn'>

                <button>Login</button>
                </div>
                <div className="flex items-center ">
                  <HiOutlineGlobeAlt className='mr-1 personIcon'/>
                  <span>BN</span>
                  <HiOutlineChevronDown/>
                </div>
                <div className="cart">
                <div className="shoppingCart">
                      <CgShoppingCart className='shoopingCartIcon' />
                      <h6 className="price">0</h6>
                    </div>

                </div>
              </div>
            </div>
           
          </Container>
            <nav className={toggleMenu ? `nav shadow-lg ` : `activeNav shadow-lg`}>
           <div className="flex items-center justify-between pr-5">
           <Link href='/'> <h3 className="text-4xl font-bold mb-3"> TechZon </h3></Link>
            <HiOutlineX onClick={handleToggle} size={35} className='cursor-pointer'/>
           </div>
              <ul className='space-y-3'>
                <li><Link href='/'>Home</Link> </li>
                <li><Link href='/'>Categories</Link> </li>
                <li><Link href='/products'>Products</Link> </li>
                <li><Link href='/flash-sale'>Flash Sale</Link> </li>
                <li><Link href='/about-us'>About Us</Link> </li>
                <li><Link href='/contact-us'>Contact Us</Link> </li>
                <li><Link href='/login'>Login</Link> </li>
              </ul>
            </nav>

        </div>
       </div>
      </div>
      
    </div>
  );
};

export default Header;