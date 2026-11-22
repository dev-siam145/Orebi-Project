import React from "react";
import Container from "../common/Container";
import logo from "../../assets/images/logo.png";
import Image from "../ui/Image";
import { Link } from "react-router";
import { menuData } from "../../dummyData/menuData";

const Navbar = () => {
  return (
    <header>
      <Container className={"py-8"}>
        <div className="flex items-center justify-between">
          <Link to="/">
            <Image src={logo} />
          </Link>
          <ul className="flex items-center gap-10">
            {menuData.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
