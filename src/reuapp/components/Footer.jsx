import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
export const Footer = () => 
    <footer className='flex py-8 items-center w-full border-t flex-auto'>
        <div className='w-2/6'>
            <figure className='w-8 flex items-cente'>
                <img className='w-full mr-3' src={logo} alt='Reuapp' />
                <h1 className='text-xl font-bold text-sky-700'>Reu<span className='text-black'>APP</span></h1>
            </figure>
        </div>
        <p className='w-2/6 text-center'>Developed by <Link href='' className='text-sky-700 hover:underline'>Nels</Link>🌟</p>
        <nav className='flex w-2/6 justify-end' style={{ gap: '1.5rem' }}>
            <Link to='/' className='hover:border-b'>Iniciar</Link>
            <Link to='/' className='hover:border-b'>About</Link>
            <Link to='/register' className='hover:text-sky-700'>Admin</Link>
        </nav>
    </footer>