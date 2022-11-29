import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavBar = () => {

  const navRef = useRef();
  const [show, setshow] = useState(true);
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
    if (show) {
      setshow(false)
    }
    if(show){
      setshow(true)
    }
	};
  

  return (
   <div className="">
     <header>
    <nav ref={navRef}>
      <a href="/#">Home</a>
      <a href="#about">About me</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
    <button onClick={showNavbar} className="nav-btn">
    <FaBars size={30}  style={{ color: 'red' }} className="nav__icon"/>
    </button>
    <h3 className="logo">LOGO</h3>
  </header>
   </div>
  )
}
