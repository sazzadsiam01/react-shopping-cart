import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.svg';

const Navbar = ({ cartTotal = 0, handleDisplayCart }) => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 flex justify-between px-4 sm:px-10 py-5 border-b-4 border-red-500 bg-black'>
      <span>
        <FontAwesomeIcon icon={faBars} className='text-2xl text-primary cursor-pointer' />
      </span>
      <span>
        <img className=' w-48 sm:w-56' src={logo} alt="logo" />
      </span>
      <span onClick={() => handleDisplayCart('block')} className='relative cursor-pointer'>
        <FontAwesomeIcon icon={faCartShopping} className='text-2xl text-primary' />
        <span className=' min-w-5 p-0.5 bg-primary text-xs text-blackish font-bold border-2 rounded border-blackish absolute -top-4 -right-2 text-center'>{cartTotal}</span>
      </span>
    </nav>
  )
}
export default Navbar;