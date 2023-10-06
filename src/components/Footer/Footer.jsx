/* eslint-disable no-unused-vars */
import React from "react";
import social from '/social.png';

const Footer = () => {
  return (
    <div>
        <footer className="footer mt-10 px-8 md:px-10 lg:px-20 pb-10 pt-20 bg-black text-white lg:gap-24">
        <nav>
            <h2 className="text-2xl font-extrabold">CareerPro</h2>
            <p className="text-xs text-[#FFFFFF] opacity-70 leading-5 lg:w-80">
            Embark on a transformative journey for your career by exploring CareerHub and elevating your professional aspirations.
            </p>
            <img src={social} alt="" className="w-24"/>
        </nav>
        <nav>
            <header className="text-sm font-medium">Company</header>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">About us</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Work</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Latest News</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Careers</a>
        </nav>
        <nav>
            <header className="text-sm font-medium">Product</header>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Prototype</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Plans & Pricing</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Customers</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Integrations</a>
        </nav>
        <nav>
            <header className="text-sm font-medium">Support</header>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Sales</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Become a Partner</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Developers</a>
        </nav>
        <nav>
            <header className="text-sm font-medium">Contact</header>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">524 Broadway , NYC</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">+1 777 - 978 - 5570</a>
        </nav>
        </footer>  
        <footer className="py-10 px-8 md:px-10 lg:px-20 bg-black text-[#FFFFFF] text-opacity-70 border-t border-stone-700 flex justify-between">
            <div>
                <p className="text-xs">@2023 <span className="font-bold">CareerPro</span>. All Rights Reserved</p>
            </div>
            <div>
                <p className="text-xs">Powered by <span className="font-extrabold">CareerPro</span></p>
            </div>
        </footer>
    </div>
  )
};

export default Footer;
