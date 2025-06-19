import { useState } from "react";
import { NavLink } from "react-router-dom";

 function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-600 px-4 py-2 rounded"
      : "text-gray-800 hover:bg-blue-100 px-4 py-2 rounded";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Pagination</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/pagination1" className={navLinkStyle}>Pagination1</NavLink>
          <NavLink to="/pagination2" className={navLinkStyle}>Pagination2</NavLink>
           <NavLink to="/contact" className={navLinkStyle} onClick={() => setIsOpen(false)}>Contact-Form</NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <NavLink to="/" className={navLinkStyle} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/pagination1" className={navLinkStyle} onClick={() => setIsOpen(false)}>pagination1</NavLink>
          <NavLink to="/pagination2" className={navLinkStyle} onClick={() => setIsOpen(false)}>pagination2</NavLink>
          <NavLink to="/contact" className={navLinkStyle} onClick={() => setIsOpen(false)}>Contact-Form</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
