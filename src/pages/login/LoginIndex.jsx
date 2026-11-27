import React from "react";
import Container from "../../components/common/Container";
import BreadCrumb from "../../components/common/BreadCrumb";
import Peragraph from "../../components/ui/Peragraph";
import Line from "../../components/common/Line";
import SectionHeading from "../../components/common/SectionHeading";
import Input from "../../components/ui/Input";
import PrimaryButton from "../../components/ui/PrimaryButton";

const LoginIndex = () => {
  return (
    <section className="pt-31 pb-35">
      <Container>
        <BreadCrumb label="login" rootUrl="/" rootLabel="Home" />
        <Peragraph
          className="mt-[127px] max-w-[644px]"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
        />
        <Line className="mt-[62px] mb-[57px]" />
        <SectionHeading text="Returning Customer" />
        <form className="max-w-[1055px] mt-10.5">
          <div className=" gap-10 grid grid-cols-2 ">
            <div className="flex flex-col">
              <label className="text-base font-bold">Email Address</label>
              <Input
                className="border-b border-line py-4 outline-0"
                placeholder="company@domain.com"
                name="email"
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base font-bold">Password</label>
              <Input
                className="border-b border-line py-4 outline-0"
                placeholder="*****"
                name="password"
                type="password"
              />
            </div>
          </div>
          <PrimaryButton type="submit" text="Log In" className="mt-7.25 px-7.25" />
        </form>
         <Line className="mt-[70px] mb-[58px]" />
          <SectionHeading text="New Customer" />
           <Peragraph
          className="mt-9.5 max-w-[644px]"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
        />
         <PrimaryButton  text="Continue" className="mt-12.75 px-7.25" />
      </Container>
    </section>
  );
};

export default LoginIndex;
