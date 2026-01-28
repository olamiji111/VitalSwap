import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='h-px bg-zinc-300 w-full ' />
            <p className="  text-center sm:text-end text-zinc-400 text-xs">
                © {new Date().getFullYear()} VitalSwap Inc. All rights reserved. Privacy.Terms.
            </p>
        </footer>
    )
}

export default Footer;
