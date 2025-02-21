import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <div className="py-8 bg-[#231D16] w-screen">
      <div className="w-[93%] mx-auto flex justify-between lg:flex md:flex hidden">
        <img src={logo} className="w-[235px] h-[43px]" />
        <div className="flex space-x-10 text-white font-serif">
          {['Homepage', 'List Product', 'Marketplace', 'Store'].map((item) => (
            <NavLink to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#FFB054] hover:font-[500] text-[18px]">
              {item}
            </NavLink>
          ))}
        </div>
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center bg-[#54BE73] px-3 py-2 text-[20px] font-semibold text-white rounded-3xl">
            Get Started
            <IoMdArrowDropdown className="h-5 w-5 text-white" />
          </MenuButton>
          <MenuItems className="absolute right-0 mt-2 w-56 bg-[#231D16] shadow-lg ring-1 ring-black ring-opacity-5 rounded-md focus:outline-none">
            {['My Stores', 'Create store', 'Profile', 'Chat'].map((item) => (
              <MenuItem>
                <NavLink to={`/${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 text-sm text-white hover:bg-[#54BE73]">
                  {item}
                </NavLink>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
      <div className="w-[95%] mx-auto flex justify-between lg:hidden md:hidden relative">
        <img src={logo} className="w-[185px] h-[43px]" />
        <Hamburger toggled={isOpen} toggle={setOpen} color="#ffffff" direction="right" />
        {isOpen && (
          <div className="absolute top-20 left-0 w-full h-screen bg-[#231D16] p-8 flex flex-col space-y-6">
            {['Homepage', 'List Product', 'Marketplace', 'Store'].map((item) => (
              <NavLink to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-[#FFB054] hover:font-[500] text-[18px] font-serif">
                {item}
              </NavLink>
            ))}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center bg-[#54BE73] px-3 py-2 text-white rounded-3xl">
                Get Started
                <IoMdArrowDropdown className="h-5 w-5 text-white" />
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-56 bg-[#231D16] shadow-lg ring-1 ring-black ring-opacity-5 rounded-md focus:outline-none">
                {['My Stores', 'Profile', 'Chat'].map((item) => (
                  <MenuItem>
                    <NavLink to={`/${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 text-sm text-white hover:bg-[#54BE73]">
                      {item}
                    </NavLink>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;