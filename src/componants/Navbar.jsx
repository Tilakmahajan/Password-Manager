import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-200 flex justify-between items-center px-4 h-14'>
            <div className="logo font-bold text-2xl font-bold ">
                
                
                <span className='text-green-500'>&lt;</span>
                Pass 
                <span className='text-green-500'>OP&gt;</span>

                
                </div>
            <ul >
                <li className='flex gap-4'>
                <a className='hover:font-bold' href="Home">Home</a>
                <a className='hover:font-bold' href="About">About</a>
                <a className='hover:font-bold' href="Contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
