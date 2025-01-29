import React from 'react'
import '/navbar.css'


const Navbar = () => {
    return (
    <section className='navBarSection'>
        <div className='header'>

            <div className="logoDiv">
                </div>

                <div className='navBar'>
                    <ul className='navLists flex'>
                        <li className='navItem'>
                            <a href='#' className='navLink'>Home</a>
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navLink'>Products</a>
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navLink'>Resources</a>
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navLink'>Contacts</a>
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navLink'>Blog</a>
                        </li>
                    </ul>
                <a href="#" className="logo">
                <h1>dot</h1> 
                {/* logo not working name of the logo */}
                </a>
            </div>
        </div>
    </section>
)
}

export default Navbar