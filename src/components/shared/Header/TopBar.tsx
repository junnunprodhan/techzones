
import Link from 'next/link';
import './Header.css'
const TopBar = () => {
    return (
        <div className='topBar'>
             <div className="topBarWrap">
                    <span>Welcome to TechZon</span>
                    <div className='topbarRightSide'>
                      <Link href='/wishlist'>  <span className='hover:border-b-2 transition-all '>Order Tracking</span></Link>
                      <Link href='/wishlist'>  <span className='hover:border-b-2 transition-all ' >My Wishlist</span></Link>
                    </div>
                </div>
        </div>
    );
};

export default TopBar;