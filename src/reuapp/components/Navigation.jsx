import { NavLink } from 'react-router-dom';
import { RegisterIcon, RegistersIcon, SignIcon, UsersIcon } from '../../assets';
import { useAuth } from '../../hooks/useAuth';

export const Navigation = () => {

    const { startLogout } = useAuth();

    return (
        <div className='flex justify-between my-6'>
            <div className='flex flex-col items-center text-center w-fit'>
                <NavLink
                    to='/register'
                    className='rounded-full p-3 hover:text-white hover:bg-sky-700 my-2 transition'
                    style={({ isActive }) => isActive
                        ? { color: '#fbfcfd', background: 'rgb(3 105 161)' }
                        : { color: 'rgb(156 163 175)', background: 'rgb(229 231 235)' }
                    }
                >
                    <RegisterIcon />
                </NavLink>
                <p>Nuevo Registro</p>
            </div>
            <div className='flex flex-col items-center text-center w-fit'>
                <NavLink
                    to='/list'
                    className='rounded-full p-3 hover:text-white hover:bg-sky-700 my-2 transition'
                    style={({ isActive }) => isActive
                        ? { color: '#fbfcfd', background: 'rgb(3 105 161)' }
                        : { color: 'rgb(156 163 175)', background: 'rgb(229 231 235)' }
                    }
                >
                    <RegistersIcon />
                </NavLink>
                <p>Gestión de Registros</p>
            </div>
            <div className='flex flex-col items-center text-center w-fit'>
                <NavLink
                    to='/user'
                    className='rounded-full p-3 hover:text-white hover:bg-sky-700 my-2 transition'
                    style={({ isActive }) => isActive
                        ? { color: '#fbfcfd', background: 'rgb(3 105 161)' }
                        : { color: 'rgb(156 163 175)', background: 'rgb(229 231 235)' }
                    }
                >
                    <UsersIcon />
                </NavLink>
                <p>Usuarios</p>
            </div>
            <div className='flex flex-col items-center text-center w-fit'>
                <NavLink
                    to='/report'
                    className='rounded-full p-3 hover:text-white hover:bg-sky-700 my-2 transition'
                    style={({ isActive }) => isActive
                        ? { color: '#fbfcfd', background: 'rgb(3 105 161)' }
                        : { color: 'rgb(156 163 175)', background: 'rgb(229 231 235)' }
                    }
                >
                    <RegisterIcon />
                </NavLink>
                <p>Reportes</p>
            </div>
            <div className='flex flex-col items-center text-center w-fit'>
                <button className='hover:bg-rose-700 transition text-white rounded-full p-3 my-2 bg-rose-600'
                    onClick={startLogout}
                >
                    <SignIcon />
                </button>
                <p>Cerrar Sesión</p>
            </div>
        </div>
    )
}