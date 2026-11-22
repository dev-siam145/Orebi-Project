import React from "react";
import Container from "../common/Container";
import logo from "../../assets/images/logo.png";
import Image from "../ui/Image";
import { Link } from "react-router";
import { menuData } from "../../dummyData/menuData";

const Navbar = () => {
  return (
    <header>
      <Container>
        <div className="bg-red-600">
          <Image src={logo} />
          <ul>
            {menuData.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>
                {item.label}

                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
