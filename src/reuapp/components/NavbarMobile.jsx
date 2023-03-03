import { Link, NavLink } from 'react-router-dom';
import {
    AgendaIcon,
    HomeIcon,
    RegisterIcon,
    RegistersIcon,
    ReportIcon,
    ReportsIcon,
    SignIcon,
    UsersIcon,
    UsIcon
} from '../../assets';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../assets/reuapp.png';
import { useRef } from 'react';

export const NavbarMobile = () => {

    const { startLogout } = useAuth();

    const handleMenu = () => {
        const burgerMenu = document.querySelector('#burger');
        const navigation = document.querySelector('#navigation');
        burgerMenu.classList.toggle('menu-mobile');
        navigation.classList.toggle('show');
    }


    
   return (
        <>
            <div className='block md:hidden px-2 py-3 flex justify-between items-center shadow-md relative overflow-hidden z-50'>
                <figure className='w-32'>
                    <img src={ logo } alt="logo reuapp" className='w-full' />
                </figure>
                <div id='burger' className='flex flex-col w-6 h-6 justify-around' onClick={ handleMenu }>
                    <div className='origin-left transition w-full h-0.5 bg-black rounded-full'></div>
                    <div className='origin-left transition w-full h-0.5 bg-black rounded-full'></div>
                    <div className='origin-left transition w-full h-0.5 bg-black rounded-full'></div>
                </div>
            </div>
            <div className='md:hidden absolute bg-white w-full z-10 flex flex-col py-12' id='navigation' style={{ height: 'calc( 100vh - 36px )' }}>
                        <div className=''>
                            <NavLink to='/' className='flex py-12 px-8 2xl:py-8 transition font-semibold 2xl:text-lg md:text-md'
                                style={({ isActive }) => isActive ? { color: '#0e527f', backgroundColor: '#e9e9e9' } : { color: 'black' } }
                            >
                                <HomeIcon />
                                Página principal
                            </NavLink>
                        </div>
                        <div className=''>
                            <NavLink to='/users' className='flex py-12 px-8 2xl:py-8 transition font-semibold 2xl:text-lg md:text-md'
                                style={({ isActive }) => isActive ? { color: '#0e527f', backgroundColor: '#e9e9e9' } : { color: 'black' } }
                            >
                                <UsIcon />
                                Administrar usuarios
                            </NavLink>
                        </div>
                        <div className=''>
                            <NavLink to='/registro' className='flex py-12 px-8 2xl:py-8 transition font-semibold 2xl:text-lg md:text-md'
                                style={({ isActive }) => isActive ? { color: '#0e527f', backgroundColor: '#e9e9e9' } : { color: 'black' } }
                            >
                                <RegisterIcon />
                                Registrar reuniones
                            </NavLink>
                        </div>
                        <div className=''>
                            <NavLink to='/administrar' className='flex py-12 px-8 2xl:py-8 transition font-semibold 2xl:text-lg md:text-md'
                                style={({ isActive }) => isActive ? { color: '#0e527f', backgroundColor: '#e9e9e9' } : { color: 'black' } }
                            >
                                <RegistersIcon />
                                Administrar registros
                            </NavLink>
                        </div>
                        <div className=''>
                            <NavLink to='/reportes' className='flex py-12 px-8 2xl:py-8 transition font-semibold 2xl:text-lg md:text-md'
                                style={({ isActive }) => isActive ? { color: '#0e527f', backgroundColor: '#e9e9e9' } : { color: 'black' } }
                            >
                                <ReportsIcon />
                                Generar reportes
                            </NavLink>
                        </div>
                        <div className='py-12 flex justify-center lg:mt-16'>
                            <button className='text-red-400 flex font-semibold xl:text-lg md:text-md hover:text-red-400 transition hover:underline'
                                onClick={startLogout}
                            >
                                Cerrar sesión
                                <SignIcon />
                            </button>
                        </div>
            </div>
        </>
   )
}