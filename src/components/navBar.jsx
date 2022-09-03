import CartWidget from "./CartWidget";

const NavBar = ()  => {
    return (
      
      <nav className='flex justify-between items-center py-3 bg-neutral-50 text-rose-800 relative shadow-sm '>

        <div className="pl-3.5 items-center">
          logo
        </div>

        <div className='px-4 cursor-pointer md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
        </div>

        <nav className='list-none   hidden md:block'>
          <ul className="flex space-x-4 ">
            <li>Tienda</li>
            <li>Newsletter</li>
            <li>Nosotros</li>
          </ul>
        </nav>

        <div className='pr-8 flex space-x-4 hidden md:block'>
          
          <CartWidget/>

        </div>
      </nav>
    )
  }
  export default NavBar;
  