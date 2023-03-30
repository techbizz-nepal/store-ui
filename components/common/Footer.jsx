import React from 'react';
import {Spacer, Text} from "@nextui-org/react";

const Footer = ({children}) => {
    return (
        <div className={`footerWrapper relative bottom-0 w-full`}>
            <div className={`footerContainer flex justify-center items-center px-6 py-10`}>
                <div className={`text-4xl select-none cursor-pointer text-black flex-auto font-semibold`}>THAMELMART</div>

                <div className={`text-4xl select-none text-black flex-auto flex justify-around`}>
                    <div className={`flex flex-col`}>
                        <Text size={30}>About</Text>
                        <Spacer y={0.5} />
                        <Text size={15}>Contact Us</Text>
                    </div>
                    <div className={`flex flex-col`}>
                        <Text size={30}>Legal</Text>
                        <Spacer y={0.5} />
                        <Text size={15}>Data Privacy</Text>
                        <Text size={15}>Terms &amp; Conditions</Text>
                        <Text size={15}>Shipping &amp; Delivery</Text>
                    </div>
                    <div className={`flex flex-col`}>
                        <Text size={30}>Follow Us On</Text>
                        <Spacer y={0.5} />
                        <Text size={15}>Instagram</Text>
                        <Text size={15}>Facebook</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;