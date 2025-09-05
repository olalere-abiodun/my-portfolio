import React from "react";

function Footer() {
    return (
        <footer className="footer flex items-center justify-center bg-[#2B5288] text-white font-bold text-center h-[80px] w-screen">
            &copy; {new Date().getFullYear()} AbbyTech. All rights reserved.
        </footer>
    );

}

export default Footer;