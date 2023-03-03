import { format } from 'date-fns/esm';
import { es } from 'date-fns/locale';
import Modal from 'react-modal';
import { useAgenda } from '../../hooks/useAgenda';

const customStyles = {
    content: {
        top: '50%',
    },
};

Modal.setAppElement('#root');

export const EventModal = ({visible, setVisible, data}) => {

    const { expediente, fecha, interno, juzgado, dni, juez, url, user, generado, _id, estado } = data;

    const { updateRegister } = useAgenda();

    const onCLoseModal = () => {
        console.log('cerrando modal');
        setVisible(false)
    }

    const onVerified = () => {
        updateRegister(_id);
        setVisible(false);
    }
    
   return (
       <Modal
        isOpen={visible}
        onRequestClose={onCLoseModal}
        style={customStyles}
        className='modal w-11/12 sm:w-2/6'
        overlayClassName='modal-fondo'
        closeTimeoutMS={ 200 } 
       >
        <div className='px-8 py-6 text-center'>
            <p className='text-center mb-8 text-xl font-bold text-sky-600'>Información de registro</p>
            <div className='flex justify-around mt-2 mb-6'>
                <div className='flex flex-col'>
                    <p className='font-bold text-sm'>Generado por:</p>
                    <span className='text-sm'>{user}</span>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold text-sm'>Generado el:</p>
                    <span className='text-sm'>{format(generado, "dd 'de' MMMM 'del' yyyy", {locale: es})}</span>
                </div>
            </div>
            <div className='mb-6'>
                <p className='text-left pb-1 border-gray-400 border-b-2 mb-4 text-md font-bold text-gray-400'>Datos del interno</p>
                <div className='flex flex-col gap-2 pl-2'>
                    <div className='flex'>
                        <p className='font-bold text-sm mr-2'>Nombre:</p>
                        <span className='text-sm'>{interno}</span>
                    </div>
                    <div className='flex'>
                        <p className='font-bold text-sm mr-2'>Dni:</p>
                        <span className='text-sm'>{dni}</span>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <p className='text-left pb-1 border-gray-400 border-b-2 mb-4 text-md font-bold text-gray-400'>Datos de la reunión</p>
                <div className='flex flex-col gap-2 pl-2'>
                    <div className='flex'>
                        <p className='font-bold text-sm mr-2'>Fecha:</p>
                        <span className='text-sm'>{format(fecha, "dd MMMM yyyy - HH:mm", {locale: es})}</span>
                    </div>
                    <div className='flex'>
                        <p className='font-bold text-sm mr-2'>Url:</p>
                        <span className='text-sm'>{url}</span>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <p className='text-left pb-1 border-gray-400 border-b-2 mb-4 text-md font-bold text-gray-400'>Datos generales</p>
                <div className='flex flex-col gap-2 pl-2'>
                    <div className='flex'>
                        <p className='font-bold text-sm mr-2'>Expediente:</p>
                        <span className='text-sm'>{expediente}</span>
                    </div>
                    <div className='flex'>
                        <p className='font-bold text-sm mr-2'>Juzgado:</p>
                        <span className='text-sm'>{juzgado}</span>
                    </div>
                    <div className='flex'>
                        <p className='font-bold text-sm mr-2'>Juez:</p>
                        <span className='text-sm'>{juez}</span>
                    </div>
                </div>
            </div>
            <div className='flex gap-12 justify-center items-center mt-8'>
                <button className='text-red-500 hover:underline hover:cursor-pointer' onClick={ ()=>{ setVisible(false) } } >
                    Cerrar
                </button>
                {
                    estado === 'pendiente' ?
                        <button className='text-green-800 hover:bg-green-100 transition hover:cursor-pointer bg-green-50 px-4 py-1 rounded-md' onClick={ onVerified } >
                            Verificar
                        </button>
                        :   <span className='cursor-not-allowed'>Verificado</span>
                }

            </div>
        </div>
       </Modal>
   )
}