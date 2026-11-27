import React from "react";
import Container from "../common/Container";
import { Link } from "react-router";
import {
  categoryData,
  footerNavData,
  menuData,
} from "../../dummyData/menuData";
import logo from "../../assets/images/logo.png";
import Image from "../ui/Image";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F3]">
      <Container className="pt-13.75 pb-13">
        <div className="grid grid-cols-[210px_210px_210px_320px_auto] gap-12">
          <div>
            <h3 className="font-bold text-black1 font-primary uppercase mb-4.25">
              menu
            </h3>
            <ul className="grid grid-cols-1 gap-1.5">
              {menuData.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="font-regular font-primary text-sm text-gray3 capitalize"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black1 font-primary uppercase mb-4.25">
              shop
            </h3>
            <ul className="grid grid-cols-1 gap-1.5">
              {categoryData.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="font-regular font-primary text-sm text-gray3 capitalize"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black1 font-primary uppercase mb-4.25">
              help
            </h3>
            <ul className="grid grid-cols-1 gap-1.5">
              {footerNavData.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="font-regular font-primary text-sm text-gray3 capitalize"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-black1 font-primary uppercase mb-4.25">
              (052) 611-5711 company@domain.com
            </h3>
            <address
              className="font-regular not-italic
               font-primary text-sm text-gray3 capitalize"
            >
              575 Crescent Ave. Quakertown, PA 18951
            </address>
          </div>
          <div>
            <Image src={logo} alt="not found" />
          </div>
        </div>
        <div className="pt-16 flex justify-between items-center">
          <ul className="flex gap-6.5 items-center">
            <li>
              <Link>
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link>
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link>
                <FaFacebook />
              </Link>
            </li>
          </ul>
          <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
