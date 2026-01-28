import React from "react";
import Logo from "./Logo";
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaArrowUp } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <Logo />
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                {/* <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> */}

 <div>
                    <h3 className="text-lg font-semibold mb-4 ">Follow Us</h3>
                    <div className="flex space-x-4 text-4xl">
                        <a href="https://www.facebook.com/ISLAMUL.HOQUE.ISHFAK.OFFICIAL" target="_blank" className=" dark:bg-gray-700 dark:text-gray-50 bg-gray-200  text-gray-600  p-[0.3rem] rounded-full transition transform hover:scale-110 hover:text-white hover:bg-[#1877F2] "><FaFacebook /></a>
                        <a href="https://wa.me/01999932122" target="_blank" className="dark:bg-gray-700 bg-gray-200 dark:text-gray-50 text-gray-600 p-[0.3rem] rounded-full transition transform hover:scale-110 hover:bg-[#25D366] hover:text-white"><FaWhatsapp /></a>
                        <a href="https://discord.com/channels/1432222297447469077/1432222298462752841" target="_blank" className="dark:bg-gray-700 dark:text-gray-50 bg-gray-200 text-gray-600 p-[0.3rem] rounded-full transition transform hover:scale-110 hover:bg-[#5865F2] hover:text-white"><FaDiscord /></a>
                        <a href="https://www.linkedin.com/in/Islamul-Hoque" target="_blank" className="dark:bg-gray-700 dark:text-gray-50 bg-gray-200 text-gray-600 p-[0.3rem] rounded-full transition transform hover:scale-110 hover:bg-[#0A66C2] hover:text-white"><FaLinkedinIn /></a>
                        <a href="https://x.com" target="_blank" className="dark:bg-gray-700 dark:text-gray-50 bg-gray-200 text-gray-600 p-[0.3rem] rounded-full transition transform hover:scale-110 hover:bg-black hover:text-white"><FaXTwitter /></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;