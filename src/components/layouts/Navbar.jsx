import React, { useState } from "react";
import Container from "../common/Container";
import logo from "../../assets/images/logo.png";
import Image from "../ui/Image";
import { Link, useLocation } from "react-router";
import { menuData } from "../../dummyData/menuData";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaChevronDown, FaLuggageCart, FaSearch, FaUserMd } from "react-icons/fa";
import Input from "../ui/Input";

const Navbar = () => {
    const [searchValue,setSearchValue]=useState("")
  const pathname = useLocation();
 
 

  return (
    <header>
      <Container className={"py-8"}>
        <div className="flex items-center justify-between">
          <Link to="/">
            <Image src={logo} />
          </Link>
          <ul className="flex items-center gap-10 font-primary uppercase">
            {menuData.map((item, index) => (
              <li key={index}>
                <Link to={item.url} className={`font-bold text-sm ${item.url === pathname.pathname ? 'text-blue-600':'text-black'}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
        <div className="bg-footerbg py-6.25">
          <Container>
            <div className="grid grid-cols-[auto_600px_auto] justify-between items-center">
              <div className="flex gap-2 items-center font-normal text-sm font-primary text-black1">
                <RiBarChartHorizontalLine />
                <span>Shop by Category</span>
              </div>
              <div className="bg-white relative ">
                <Input className="pl-5.25 py-4 pr-20 w-full" type="search" placeholder="search product" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl" />
              </div>
              <div className="flex gap-10 items-center">
                <div className="flex gap-2 items-center">
                  <FaUserMd />
                  <FaChevronDown />


                </div>
                <FaLuggageCart />

              </div>
            </div>
          </Container>

        </div>
    </header>
  );
};

export default Navbar;
