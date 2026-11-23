import React from "react";
import { Link } from "react-router";
import Container from "./Container";
import PrimaryButton from "../ui/PrimaryButton";
import { useNavigate } from "react-router";
import Peragraph from "../ui/Peragraph";
import Input from "../ui/Input";

const CustomError = () => {
  let navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
  };
  return (
    <div className="">
      <Container>
        <div className="min-h-[80vh] flex items-center">
          <div className="max-w-[652px]">
            <span className="text-black1 text-[200px] font-bold">404</span>
            <Peragraph text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?" />
            <div className="border border-gray2 p-5 mt-12.5">
                <Input type="text" placeholder="search here" className="outline-0 w-[88%]"/>

            </div>
            <PrimaryButton
              text="back to home"
              onClick={handleRedirect}
              className="mt-15"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomError;
