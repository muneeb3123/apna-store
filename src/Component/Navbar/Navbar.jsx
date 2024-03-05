import logo from '../../assets/Nav-images/logogo.avif';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="Elo" />
      <nav>
        <NavLink to='#'>Weekly Deals</NavLink>
        <NavLink to='#'>New Arrivals</NavLink>
        <NavLink to='#'>Basics</NavLink>
        <NavLink to='#'>Men</NavLink>
        <NavLink to='#'>Kids</NavLink>
        <NavLink to='#'>Polo Repubilica</NavLink>
        <NavLink to='#'>Home</NavLink>
        <NavLink to='#'>Minor Fault</NavLink>
        <NavLink to='#'>Clearance</NavLink>
      </nav>
      <div className="nav-icons">
      <i className='bx bx-search-alt-2'></i>
      <i className='bx bx-user' ></i>
      <i className='bx bx-shopping-bag' ></i>
      </div>
    </header>
  )
}

export default Navbar
