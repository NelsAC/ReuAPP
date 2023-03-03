import { Link, NavLink } from 'react-router-dom';
import {
    AgendaIcon,
    HomeIcon,
    RegisterIcon,
    RegistersIcon,
    ReportIcon,
    ReportsIcon,
    SignIcon,
    UsIcon
} from '../../assets';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../assets/logo.png';

export const Navbar = () => {

    const { startLogout } = useAuth();

    return (

        <div className='hidden 2xl:w-2/12 md:w-1/4 h-screen fixed bg-white shadow-xl 2xl:py-28 md:py-16 px-8 md:block'>
            <div className='flex flex-col justify-between h-4/5'>
                <div className='flex flex-col items-center'>
                    <img src={logo} alt='Reuapp' className='w-32' />
                    <span className='text-gray-500 mt-4'>Administrador</span>
                </div>
                <div className='xl:px-2 md:px-1 lg:mt-8'>
                    <div className=''>
                        <NavLink to='/home' className='flex md:py-6 2xl:py-8 transition font-semibold 2xl:text-lg md:text-md'
                            style={({ isActive }) => isActive ? { color: '#0e527f' } : { color: 'black' } }
                        >
                            <HomeIcon />
                            Página principal
                        </NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/users' className='flex md:py-6 2xl:py-8 transition font-semibold 2xl:text-lg md:text-md'
                            style={({ isActive }) => isActive ? { color: '#0e527f' } : { color: 'black' } }
                        >
                            <UsIcon />
                            Administrar usuarios
                        </NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/registro' className='flex md:py-6 2xl:py-8 transition font-semibold 2xl:text-lg md:text-md'
                            style={({ isActive }) => isActive ? { color: '#0e527f' } : { color: 'black' } }
                        >
                            <RegisterIcon />
                            Registrar reuniones
                        </NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/administrar' className='flex md:py-6 2xl:py-8 transition font-semibold 2xl:text-lg md:text-md'
                            style={({ isActive }) => isActive ? { color: '#0e527f' } : { color: 'black' } }
                        >
                            <RegistersIcon />
                            Administrar registros
                        </NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/reportes' className='flex md:py-6 2xl:py-8 transition font-semibold 2xl:text-lg md:text-md'
                            style={({ isActive }) => isActive ? { color: '#0e527f' } : { color: 'black' } }
                        >
                            <ReportsIcon />
                            Generar reportes
                        </NavLink>
                    </div>
                </div>
                <div className='flex justify-center lg:mt-16'>
                    <button className='flex font-semibold xl:text-lg md:text-md hover:text-red-400 transition hover:underline'
                        onClick={startLogout}
                    >
                        Cerrar sesión
                        <SignIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}