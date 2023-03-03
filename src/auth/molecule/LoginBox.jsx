import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { MailIcon, PassIcon } from '../../assets/';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../store/auth';

const initialState = {
    user: '',
    password: '',
};

export const LoginBox = () => {

    const { startLogin, loginMsg } = useAuth();
    const clearLoginMsg = useAuthStore(state => state.clearLoginMsg);

    const {
        user,
        password,
        onInputChange
    } = useForm( initialState );

    const onSubmit = (e) => {
        e.preventDefault();
        startLogin({ user, password });
    }

    useEffect(() => {
        if (loginMsg !== null) {
            toast.error(`${loginMsg}`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
        }
        clearLoginMsg();
    }, [loginMsg])
    

    return (
        <div className='md:w-2/5 px-4 py-8 rounded sm:w-4/5 lg:w-1/4'>
            <div className='text-center mb-6'>
                <h1 className='text-2xl font-bold'>REUAPP</h1>
            </div>
            <form onSubmit={ onSubmit }>
                <div className='relative mb-4'>
                    <input
                        className='
                        bg-transparent
                        border-2
                        border-black
                        w-full
                        px-3
                        pl-10
                        py-3
                        rounded-md
                        placeholder-gray-500
                        font-semibold
                        focus:outline-none
                        focus:border-blue-700
                        focus:ring-1
                        focus:ring-blue-700
                        text-gray-800
                    '
                        type='string'
                        placeholder='Usuario'
                        name='user'
                        value={ user }
                        onChange={ onInputChange }
                        required
                    />
                    <MailIcon />
                </div>
                <div className='relative mb-4'>
                    <input
                        className='
                        bg-transparent 
                        border-2 
                        border-black 
                        w-full 
                        px-3
                        pl-10 
                        py-3
                        rounded-md 
                        placeholder-gray-500 
                        font-semibold 
                        focus:outline-none 
                        focus:border-blue-700 
                        focus:ring-1 
                        focus:ring-blue-700
                        text-gray-800
                    '
                        type='password'
                        placeholder='Contraseña'
                        name='password'
                        value={ password }
                        onChange={ onInputChange }
                        required
                    />
                    <PassIcon />
                </div>
                <button
                    className='
                    bg-black
                    hover:bg-zinc-900
                    transition
                    border-2 
                    border-black 
                    w-full 
                    px-3
                    py-3
                    rounded-md 
                    font-bold
                    text-gray-200
                '
                    type='submit'
                >
                    Ingresar
                </button>
            </form>
            <ToastContainer />
        </div>
    )
}