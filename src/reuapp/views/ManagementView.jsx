import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useAgenda } from '../../hooks/useAgenda';
import { Table } from '../components/Table';
import 'react-toastify/dist/ReactToastify.css';

export const ManagementView = () => {

    const { getRegisters, all } = useAgenda();
    const [rows, setRows] = useState(5);

    useEffect(() => {

        getRegisters();
      
    }, [])

    const onSelectInputChange = ({ target }) => {
        setRows(target.value);
    }
    

    return (
        <div className='sm:px-0 mt-12 sm:mt-14 overflow-scroll sm:overflow-auto w-11/12 mx-auto'>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-xl'>Lista de registros</h2>
                <div className='flex sm:flex-row justify-end items-center'>
                <div className='flex flex-col sm:flex-row items-center'>
                    <div className='flex items-center'>
                        <span className='text-gray-400 text-sm'>Mostrar:</span>
                        <div className='relative ml-2'>
                            <select
                                className='w-32 h-10 pl-4 pr-8 text-base placeholder-gray-600 border rounded-lg appearance-none outline-none'
                                placeholder='Placeholder'
                                name='rows'
                                onChange={ onSelectInputChange }
                            >
                                <option value={ 5 }>5</option>
                                <option value={ 10 }>10</option>
                                <option value={ 15 }>15</option>
                                <option value={ 20 }>20</option>
                            </select>
                            <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
                                <svg
                                    className='w-4 h-4 fill-current'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M7.293 7.707l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0-1.414-1.414L12 9.586l-2.293-2.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414z' />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Table data={ all } rowsPerPage={ rows } />
            
            <ToastContainer />
        </div>
    )
}