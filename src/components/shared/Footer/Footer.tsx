import "./Footer.css";
import { HiEnvelope, HiMiniPhone, HiHome } from "react-icons/hi2";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Container from "@/components/ui/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#FFFFFF] sectionMargin ">
      <Container className="">
        <div className="footer">
          <div>
           <Link href='/products'>
           <h3 className="text-xl font-bold mb-3"> Trending Products</h3>
           </Link>

            <ul>
              <li>Wireless Earbuds</li>
              <li>Smartwatches</li>
              <li>Reusable Water Bottles</li>
              <li>Home Fitness Equipment</li>
              <li>Desk Accessories</li>
              <li>Plant-Based Skincare</li>
            </ul>
          </div>
          <div>
            <Link href='/about-us'>
            <h3 className="text-xl font-bold mb-3">About Us</h3>
            </Link>
            <ul>
              <li>About TechZon</li>
              <li>Contact TechZon</li>
              <li>TechZon Blog</li>
              <li>TechZon Card</li>
              <li>TechZon Exclusive </li>
              <li>TechZon Mart </li>
              <li>Digital Payment </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Categories/Brands</h3>
            <ul>
              <li>Woman Denim</li>
              <li>Accessories</li>
              <li>Man Denim</li>
              <li>Clothes</li>
              <li>Shoes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3"> Customer Care</h3>
            <ul>
              <li>Help Center</li>
              <li>Returns & Refunds</li>
              <li>Cookie policy</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>CCMS - Central Complain </li>
            </ul>
          </div>
          <div>
           <Link href='/contact-us'>
           <h3 className="text-xl font-bold mb-3">Contact Us </h3>
           </Link>

            <div>
              <button className="shopBtn mt-3 mb-3">Subscribe </button>
            </div>
            <div>
              <h5 className="text-xl mb-3">Payment Method </h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
