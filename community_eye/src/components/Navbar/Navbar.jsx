// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useContext, useEffect, useRef, useState } from "react";
// import { CgMenuRight } from "react-icons/cg";
// import { RiCloseFill } from "react-icons/ri";
//  // Use from public folder or adjust path


// const Navbar = () => {

  
  
//   const sidebarRef = useRef(null);

//   const [activeLink, setActiveLink] = useState("/");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   // Highlight active route
 

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close sidebar when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen]);

  

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md ${isScrolled ? "shadow-lg" : ""}`}>
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <h1 className="w-10 h-10" >CE</h1>
//           <span className="text-xl font-semibold text-gray-800">Community Eye</span>
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden text-2xl text-gray-700 focus:outline-none"
//           aria-label="Open Menu"
//         >
//           <CgMenuRight />
//         </button>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
//           <Link to="/report" className={activeLink === "/report" ? "text-blue-600" : ""}>Report</Link>
//           <Link to="/dashboard" className={activeLink === "/dashboard" ? "text-blue-600" : ""}>Map</Link>
//           <Link to="/locator" className={activeLink === "/locator" ? "text-blue-600" : ""}>Find Ward</Link>
//           <Link to="/about" className={activeLink === "/about" ? "text-blue-600" : ""}>About</Link>
//           <Link to="/contact" className={activeLink === "/contact" ? "text-blue-600" : ""}>Contact</Link>

          
            
//               <Link to="/signup" className="text-blue-600">Sign Up</Link>
//               <Link to="/login" className="text-gray-600">Login</Link>
            
          
//             <button  className="text-red-600">Logout</button>
        
//         </div>

//         {/* Mobile Sidebar */}
//         <div
//           ref={sidebarRef}
//           className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="flex justify-between items-center px-4 py-4 border-b">
//             <span className="text-lg font-semibold text-gray-800">Menu</span>
//             <button onClick={() => setIsOpen(false)} className="text-2xl">
//               <RiCloseFill />
//             </button>
//           </div>
//           <div className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
//             <Link to="/report" onClick={() => setIsOpen(false)}>Report</Link>
//             <Link to="/dashboard" onClick={() => setIsOpen(false)}>Map</Link>
//             <Link to="/locator" onClick={() => setIsOpen(false)}>Find Ward</Link>
//             <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
//             <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

            
            
//                 <Link to="/signup" onClick={() => setIsOpen(false)} className="text-blue-600">Sign Up</Link>
//                 <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
              
            
//               <button className="text-red-600 text-left">Logout</button>
            
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import "../Navbar/Navbar.css"; // Import your CSS file for custom styles

const Navbar = () => {
  const location = useLocation();
  const sidebarRef = useRef(null);

  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Highlight active route
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`fixed items-center justify-center top-0 left-0 w-full z-600 bg-white ${isScrolled ? "shadow-md" : ""}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-bold">
            CE
          </div>
          <span className="text-xl font-semibold text-gray-800">Community Eye</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-2xl text-gray-700"
          aria-label="Open Menu"
        >
          <CgMenuRight />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center text-gray-700 font-medium">
          {[
            { path: "/report", label: "Report" },
            { path: "/dashboard", label: "Map" },
            { path: "/locator", label: "Find Ward" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`nav_link hover:text-blue-600 transition ${
                activeLink === path ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <Link to="/signup" className="nav_button text-blue-600 hover:underline">Sign Up</Link>
          <Link to="/login" className="nav_buttons text-gray-600 hover:underline">Login</Link>
          
        </div>

        {/* Mobile Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-100 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <span className="text-lg font-semibold text-gray-800">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-2xl">
              <RiCloseFill />
            </button>
          </div>
          <div className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            {[
              { path: "/report", label: "Report" },
              { path: "/dashboard", label: "Map" },
              { path: "/locator", label: "Find Ward" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
              { path: "/auth", label: "Sign Up", style: "text-blue-600" },
              { path: "/auth", label: "Login" },
            ].map(({ path, label, style }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`${style || ""} hover:text-blue-600 transition`}
              >
                {label}
              </Link>
            ))}
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
