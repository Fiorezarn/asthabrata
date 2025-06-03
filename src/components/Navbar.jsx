import React, { useState, useEffect, useCallback } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import astha from '../assets/logo_nav.svg';
import flagen from '../assets/flag_en.svg';
import flagid from '../assets/flag_id.svg';
import {
 setLanguage,
 selectLanguageData,
} from '../redux-toolkit/languageSlice';

// Constants
const LANGUAGES = {
 ID: { code: 'id', label: 'ID', flag: flagid },
 ENG: { code: 'en', label: 'ENG', flag: flagen },
};

const SCROLL_THRESHOLD = 80;

const Navbar = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [hasScrolled, setHasScrolled] = useState(false);
 const [selectedLanguage, setSelectedLanguage] = useState('ID');
 const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

 const dispatch = useDispatch();
 const languageData = useSelector(selectLanguageData);
 const location = useLocation();

 // Navigation items
 const navItems = [
  { id: 1, text: languageData.home, path: '/' },
  { id: 2, text: languageData.about, path: '/About' },
  { id: 3, text: languageData.contact, path: '/Contact' },
 ];

 // Handle scroll effect
 const handleScroll = useCallback(() => {
  setHasScrolled(window.scrollY >= SCROLL_THRESHOLD);
 }, []);

 // Handle language selection
 const handleLanguageSelect = useCallback(
  (languageKey) => {
   setSelectedLanguage(languageKey);
   dispatch(setLanguage(LANGUAGES[languageKey].code));
   setIsLanguageDropdownOpen(false);
  },
  [dispatch]
 );

 // Toggle mobile menu
 const toggleMobileMenu = useCallback(() => {
  setIsMobileMenuOpen((prev) => !prev);
 }, []);

 // Close mobile menu when route changes
 useEffect(() => {
  setIsMobileMenuOpen(false);
 }, [location.pathname]);

 // Setup scroll listener
 useEffect(() => {
  handleScroll(); // Check on mount
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, [handleScroll]);

 // Close dropdowns when clicking outside
 useEffect(() => {
  const handleClickOutside = (event) => {
   if (!event.target.closest('.language-dropdown')) {
    setIsLanguageDropdownOpen(false);
   }
  };

  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
 }, []);

 // Navigation Link Component (now unused - can be removed)
 const NavLink = ({ item, className = '', onClick }) => (
  <Link
   to={item.path}
   className={`block w-full h-full text-white hover:text-white font-bold font-roboto ${className}`}
   onClick={onClick}>
   {item.text}
  </Link>
 );

 // Language Selector Component
 const LanguageSelector = ({ isMobile = false }) => {
  const currentLanguage = LANGUAGES[selectedLanguage];
  const baseClasses = isMobile ? 'ml-4 mt-2' : '';

  return (
   <div
    className={`${baseClasses} relative inline-block w-20 language-dropdown`}>
    <button
     className='w-full text-black font-bold rounded-md bg-white p-2 cursor-pointer flex items-center justify-center'
     onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
     aria-label='Select language'>
     <img
      className='inline-block mr-2 w-4 h-3'
      src={currentLanguage.flag}
      alt={`${currentLanguage.label} flag`}
     />
     {currentLanguage.label}
    </button>

    {isLanguageDropdownOpen && (
     <ul className='absolute w-full bg-white border rounded-md mt-1 text-black z-30 shadow-lg'>
      {Object.entries(LANGUAGES).map(([key, lang]) => (
       <li key={key}>
        <button
         className='w-full p-2 cursor-pointer hover:bg-gray-200 flex items-center text-left'
         onClick={() => handleLanguageSelect(key)}>
         <img
          className='inline-block mr-2 w-4 h-3'
          src={lang.flag}
          alt={`${lang.label} flag`}
         />
         {lang.label}
        </button>
       </li>
      ))}
     </ul>
    )}
   </div>
  );
 };

 return (
  <nav
   className={`w-full fixed z-20 flex justify-between items-center h-24 mx-auto px-12 text-white transition-all duration-500 ease-in-out ${
    hasScrolled ? 'bg-[#112D4E]' : 'bg-transparent'
   }`}>
   {/* Logo */}
   <div className='flex'>
    <Link
     to='/'
     className='block'>
     <img
      className='w-72 items-center'
      src={astha}
      alt='Astha Brata Logo'
     />
    </Link>
   </div>

   {/* Desktop Navigation */}
   <div className='hidden md:flex flex-grow justify-end items-center gap-6'>
    <ul className='flex items-center gap-6'>
     {navItems.map((item) => (
      <li
       key={item.id}
       className='hover:bg-[#3F72AF] rounded-xl cursor-pointer duration-300'
       style={{ minWidth: 'fit-content' }}>
       <Link
        to={item.path}
        className='block w-full h-full p-4 text-white hover:text-white font-bold font-roboto rounded-xl'>
        {item.text}
       </Link>
      </li>
     ))}
    </ul>
    <LanguageSelector />
   </div>

   {/* Mobile Navigation Icon */}
   <button
    onClick={toggleMobileMenu}
    className='block md:hidden p-2'
    aria-label='Toggle mobile menu'>
    {isMobileMenuOpen ? (
     <AiOutlineClose size={20} />
    ) : (
     <AiOutlineMenu size={20} />
    )}
   </button>

   {/* Mobile Navigation Menu */}
   <div
    className={`fixed z-10 md:hidden left-0 top-0 w-[60%] h-screen bg-[#3F72AF] transition-transform duration-500 ease-in-out ${
     isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
    {/* Mobile Logo */}
    <div className='p-4'>
     <h1 className='text-3xl font-bold text-[#F9F7F7]'>Astha Brata</h1>
    </div>

    {/* Mobile Navigation Items */}
    <ul>
     {navItems.map((item) => (
      <li
       key={item.id}
       className='border-b border-gray-600'>
       <Link
        to={item.path}
        className='block w-full p-4 rounded-xl hover:bg-[#112D4E] duration-300 cursor-pointer text-white hover:text-white font-bold'
        onClick={toggleMobileMenu}>
        {item.text}
       </Link>
      </li>
     ))}
    </ul>

    <LanguageSelector isMobile />
   </div>

   {/* Mobile Menu Overlay */}
   {isMobileMenuOpen && (
    <div
     className='fixed inset-0 bg-black bg-opacity-50 z-5 md:hidden'
     onClick={toggleMobileMenu}
    />
   )}
  </nav>
 );
};

export default Navbar;
