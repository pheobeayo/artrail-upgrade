import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { IoMdArrowDropdown } from "react-icons/io";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const {isConnected} = useWeb3ModalAccount();
  
  return (
    <div className="py-8 bg-[#231D16] w-screen">
      <div className="w-[93%] mx-auto flex justify-between items-center lg:flex md:flex hidden">
        <img src={logo} className="w-[235px] h-[43px]" />
        <nav>
          <NavLink
            to="/"
            className="text-white hover:text-[#FFB054] hover:font-[500] mr-10 text-[18px] font-serif"
          >
            Homepage
          </NavLink>
          {isConnected && (<NavLink
            to="/list-product"
            className="text-white hover:text-[#FFB054] hover:font-[500] mr-10 text-[18px] font-serif"
          >
            List Product
          </NavLink>)}
          <NavLink
            to="/marketplace"
            className="text-white hover:text-[#FFB054] hover:font-[500] mr-10 text-[18px] font-serif"
          >
            Marketplace
          </NavLink>
          {isConnected && (<NavLink
            to="/store"
            className="text-white hover:text-[#FFB054] hover:font-[500] mr-10 text-[18px] font-serif"
          >
            Store
          </NavLink>)}

        </nav>
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center bg-[#54BE73] px-3 py-2 text-[20px] font-semibold text-white rounded-3xl">
            Get Started
            <IoMdArrowDropdown className="h-5 w-5 text-white" />
          </MenuButton>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#231D16] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#54BE73]"
                >
                 <w3m-button />
                </a>
              </MenuItem>
              {isConnected && (<MenuItem>
                <a
                  href="/store"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#54BE73] mt-6"
                >
                 My Stores
                </a>
              </MenuItem>)}
              {isConnected && (<MenuItem>
                <a
                  href="/create-store"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#54BE73]"
                >
                  Create store
                </a>
              </MenuItem>)}
             {isConnected && <MenuItem>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#54BE73]"
                >
                  Profile
                </a>
              </MenuItem>}
              <MenuItem>
                <a
                  href="/chat"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#54BE73]"
                >
                  Chat
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
      <div className="w-[95%] mx-auto flex justify-between lg:hidden md:hidden relative">
        <img src={logo} className="w-[185px] h-[43px]" />
        <Hamburger toggled={isOpen} toggle={setOpen} color="#ffffff" direction="right" />
        {isOpen && (
          <div className="absolute top-20 left-0 w-full h-screen bg-[#231D16] p-8 flex flex-col space-y-6">
          <NavLink
            to="/"
            className="text-white hover:text-[#FFB054] hover:font-[500] mr-10 text-[18px] font-serif"
          >
            Homepage
          </NavLink>
          {isConnected && (<NavLink
            to="/list-product"
            className="text-white hover:text-[#FFB054] hover:font-[500] mr-10 text-[18px] font-serif"
          >
            List Product
          </NavLink>)}
          <NavLink
            to="/marketplace"
            className="text-white hover:text-[#FFB054] hover:font-[500] mr-10 text-[18px] font-serif"
          >
            Marketplace
          </NavLink>
          {isConnected && (<NavLink
            to="/store"
            className="text-white hover:text-[#FFB054] hover:font-[500] mr-10 text-[18px] font-serif"
          >
            Store
          </NavLink>)}
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center bg-[#54BE73] px-3 py-2 text-[20px] font-semibold text-white rounded-3xl">
            Get Started
            <IoMdArrowDropdown className="h-5 w-5 text-white" />
          </MenuButton>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#231D16] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#54BE73]"
                >
                 <w3m-button />
                </a>
              </MenuItem>
              {isConnected && (<MenuItem>
                <a
                  href="/store"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#54BE73] mt-6"
                >
                 My Stores
                </a>
              </MenuItem>)}
              {isConnected && (<MenuItem>
                <a
                  href="/create-store"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#54BE73]"
                >
                  Create store
                </a>
              </MenuItem>)}
             {isConnected && <MenuItem>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#54BE73]"
                >
                  Profile
                </a>
              </MenuItem>}
              <MenuItem>
                <a
                  href="/chat"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#54BE73]"
                >
                  Chat
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;