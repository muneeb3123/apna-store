import logo from '../../assets/Nav-images/logogo.avif';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='flex px-52 py-4 items-center gap-12'>
      <img src={logo} alt="Elo" />
      <nav className='mr-4'>
        <NavLink className='mr-12 "text-gray' to='#'>Weekly Deals</NavLink>
        <NavLink className='mr-12 "text-gray' to='#'>New Arrivals</NavLink>
        <NavLink className='mr-12 "text-gray' to='#'>Basics</NavLink>
        <NavLink className='mr-12 "text-gray' to='#'>Men</NavLink>
        <NavLink className='mr-12 "text-gray'to='#'>Kids</NavLink>
        <NavLink className='mr-12 "text-gray' to='#'>Polo Repubilica</NavLink>
        <NavLink className='mr-12 "text-gray' to='#'>Home</NavLink>
        <NavLink className='mr-12 "text-gray' to='#'>Minor Fault</NavLink>
        <NavLink className='mr-12 "text-gray' to='#'>Clearance</NavLink>
      </nav>
      <div className="text-2xl flex gap-12">
      <i className='bx bx-search-alt-2' ></i>
      <i className='bx bx-user ' ></i>
      <i className='bx bx-shopping-bag' ></i>
      </div>
    </header>
  )
}

export default Navbar;
