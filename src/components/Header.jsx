import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <header>
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NavLink to="/" end>
              <img
                src="/cps-photography.png"
                alt="Photographer Portfolio"
                className="h-20 sm:h-24 w-auto"
              />
            </NavLink>
          </motion.div>
          <div className="hidden sm:block">
            <ul className="flex space-x-4">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-800 uppercase text-lg"
                      : "text-gray-600 hover:text-gray-800 uppercase text-lg"
                  }
                >
                  Home
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-800 uppercase text-lg"
                      : "text-gray-600 hover:text-gray-800 uppercase text-lg"
                  }
                >
                  Gallery
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-800 uppercase text-lg"
                      : "text-gray-600 hover:text-gray-800 uppercase text-lg"
                  }
                >
                  About
                </NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-800 uppercase text-lg"
                      : "text-gray-600 hover:text-gray-800 uppercase text-lg"
                  }
                >
                  Contact
                </NavLink>
              </motion.li>
            </ul>
          </div>
          <div className="sm:hidden">
            <button
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <motion.svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mt-0 sm:mt-4 overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div>
                <ul className="flex flex-col space-y-2 bg-white rounded-lg shadow-lg p-4 text-center">
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <NavLink
                      to="/"
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-800 uppercase text-base"
                          : "text-gray-600 hover:text-gray-800 uppercase text-base"
                      }
                      onClick={toggleMenu}
                    >
                      Home
                    </NavLink>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <NavLink
                      to="/gallery"
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-800 uppercase text-base"
                          : "text-gray-600 hover:text-gray-800 uppercase text-base"
                      }
                      onClick={toggleMenu}
                    >
                      Gallery
                    </NavLink>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-800 uppercase text-base"
                          : "text-gray-600 hover:text-gray-800 uppercase text-base"
                      }
                      onClick={toggleMenu}
                    >
                      About
                    </NavLink>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-800 uppercase text-base"
                          : "text-gray-600 hover:text-gray-800 uppercase text-base"
                      }
                      onClick={toggleMenu}
                    >
                      Contact
                    </NavLink>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
