import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import { TableUser } from '../components/TableUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    user: '',
    password: ''
}

export const UsersView = () => {
    
    const [ formUser, setFormUser ] = useState(false);
    const { getUsers, allUsers, startNewUsuario } = useAuth();
    const { onInputChange, user, password, formState, onResetForm } = useForm( initialState );

    useEffect(() => {

        getUsers();
      
    }, [])

    const onCreateUser = (e) => {
        e.preventDefault();
        startNewUsuario( formState );
        onResetForm();
        setFormUser(false);
    }
    
    return (
    <div className='sm:px-0 mt-12 sm:mt-14 overflow-scroll sm:overflow-auto w-11/12 mx-auto'>
        <div className=''>
            <h2 className='font-bold text-xl'>Gestión de Usuarios</h2>
        </div>
        <div className='mt-12 w-7/12 mx-auto'>
            {
                !formUser
                ? <button 
                    className='hover:bg-gray-100 transition w-full py-2 text-gray-400 text-lg font-semibold border-dashed border-2 border-gray-300 rounded-lg' onClick={ () => setFormUser(true) }
                  >
                    Nuevo Usuario +
                  </button>
                : <form className='border border-gray-300 mt-8 rounded-lg bg-white p-6' onSubmit={ onCreateUser }>
                    <div>
                        <label className='text-md'>Ingrese un usuario:</label>
                        <input autoFocus type='text' className='w-full border border-gray-300 rounded-lg py-2 px-4 mt-2' placeholder='Example: AlexKbrito' name='user' onChange={ onInputChange } value={ user } />
                    </div>
                    <div className='mt-4'>
                        <label className='text-md'>Ingrese una contraseña:</label>
                        <input type='password' className='w-full border border-gray-300 rounded-lg py-2 px-4 mt-2' placeholder='******' name='password' value={ password } onChange={ onInputChange } /> 
                    </div>
                    <div className='mt-6 flex gap-4'>
                        <button className='font-semibold text-center w-1/2 bg-gray-200 rounded-lg py-2' type='button' onClick={ () => setFormUser(false) }>Cancelar</button>
                        <button className='font-semibold text-center text-white w-1/2 bg-sky-700 rounded-lg py-2' type='submit'>Crear</button>
                    </div>
                  </form>
            }
        </div>
        <TableUser data={ allUsers } rowsPerPage={ 4 } />
        <ToastContainer />
    </div>
    )
}