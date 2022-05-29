import Link from "next/link";
import React from "react";

const recycleImage =
  "https://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-light-green.png";

export default function Navbar({}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-lime-500 to-lime-400'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <div className='flex'>
              <a
                href='/'
                className='flex text-xl font-bold leading-relaxed mr-4 whitespace-nowrap text-white hover:opacity-75'
              >
                <div className='translate-y-1 pr-3'>Recycle Now</div>
                <img
                  src={recycleImage}
                  width='50'
                  height='50'
                  className='object-cover'
                ></img>
              </a>
            </div>
            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <Link href='/about'>
                  <a className='px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75'>
                    <i className='fab fa-facebook-square text-lg leading-lg text-white opacity-75'></i>
                    <span className='ml-2'>About</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
