import logo from '../assets/images/icon-nav.webp'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-14'>
      <img className='cursor-pointer w-14 h-14' src={logo} alt="logo" />
      <Navbar />
    </header>
  )
}