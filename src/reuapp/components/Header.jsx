import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
export const Header = () => 
    <header>
        <div className='py-5 flex justify-between items-center flex-auto'>
            <figure className='w-8 flex items-center'>
                <img className='w-full mr-3' src={logo} alt='Reuapp' />
                <h1 className='text-xl font-bold text-sky-700'>Reu<span className='text-black'>APP</span></h1>
            </figure>
            <nav className='flex gap-8'>
                <Link to='/' className='hover:border-b'>Iniciar</Link>
                <Link to='/' className='hover:border-b'>About</Link>
                <Link to='/' className='hover:text-sky-700'>Github</Link>
            </nav>
        </div>
    </header>