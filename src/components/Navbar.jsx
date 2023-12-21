import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const hamburgerStyle = {
        transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)',
        transition: 'transform 0.3s ease-in-out',
    };

    const handleLinkClick = () => {
        if (window.innerWidth >= 768) {
            setMobileMenuOpen(isMobileMenuOpen);
        }
        if (window.innerWidth < 768) {
            setMobileMenuOpen(!isMobileMenuOpen);
        }
        // Use history to navigate and scroll to the top
        if (window.location.pathname === '/work') {
            navigate('/work');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-white p-6 z-[50] font-fam-bold mx-auto fixed top-0 w-full">
            <div className="container mx-auto flex md:flex-row flex-col items-center">
                <div className="flex justify-between w-full">
                    <Link to="/" className="text-black text-bold text-2xl md:text-4xl font-semibold mb-4 md:mb-0 ml-2 md:ml-0">JUI JAGTAP</Link>
                    {/* Hamburger Menu Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={toggleMobileMenu}
                        style={hamburgerStyle}
                    >
                        ☰
                    </button>
                </div>
                {/* Mobile Menu Links */}
                <div className={`md:mr-[-15px] text-2xl md:text-lg text-center justify-center md:flex md:gap-4 items-center ${isMobileMenuOpen ? 'flex flex-col open' : 'hidden'}`}>
                    <Link to="/" className="underline-effect-pink hover:text-[#D1547E] nav-link mb-2" onClick={handleLinkClick}>Home</Link>
                    <Link to="/work" className="underline-effect-pink hover:text-[#D1547E] nav-link mb-2" onClick={handleLinkClick}>Projects</Link>
                    <Link to="/contact" className="underline-effect-pink hover:text-[#D1547E] nav-link mb-2" onClick={handleLinkClick}>About</Link>
                    <Link to="/resume" className="underline-effect-pink hover:text-[#D1547E] nav-link mb-2" onClick={handleLinkClick}>Resume</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;