"use client";

import "./register.css";
import google from "../../../assets/images/google.png";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const Register = () => {
  return (
    <div className="">
      <div className="signupWrap">
        <h3 className="mb-5 text-3xl font-bold text-center capitalize">
          Create a TechZon Account{" "}
        </h3>
       
        <div className="SignupFormWrap">
          <div>
            <div className="flex items-center">
              <Input type="text" className="SingleInput" label="First Name " />
              <Input type="text" className="SingleInput" label="Last Name " />
            </div>
            <div className="flex items-center mt-5">
              <Input
                type="text"
                className="signupInput"
                label="Email Address "
              />
            </div>
            <div className="flex items-center my-5">
              <Input type="text" className="signupInput" label="Password " />
            </div>
            <small className="block w-[300px] mb-5">
              By Creating an account, you agree to our User Agreement and
              acknowledge reading our User Privacy Notice .
            </small>
            <button className="signupBtn bg-[#2251CF] text-white ">
              Create Account{" "}
            </button>
          </div>
          <div className="devider">
            <div className="line"></div>
            <div>or</div>
            <div className="line"></div>
          </div>

          <div className="mt-5 lg:mt-0 ">
            <button className="mb-5 text-black signupBtn ">
              <Image src={google} alt="google" width="50" height="50" />
              <span>Continue With Google </span>{" "}
            </button>
            <button className="signupBtn bg-[#4078c0] text-white ">
              <FaGithub className="mr-5" size={25} />{" "}
              <span>Continue With Github </span>{" "}
            </button>

            <span className="block mt-3 ">
              Already a member? <Link href="/login">Sing In </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
