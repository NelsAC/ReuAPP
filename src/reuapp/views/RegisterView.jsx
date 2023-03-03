import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import { useForm } from "../../hooks/useForm";
import { useAgenda } from "../../hooks/useAgenda";
import { ArrowIcon } from "../../assets";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../../hooks/useAuth";
import { useAuthStore } from "../../store/auth";

registerLocale('es', es);

const initialState = {
    interno: '',
    dni: '',
    juez: '',
    juzgado: '',
    fecha: '',
    expediente: '',
    url: ''
}

const formValidations = {
    interno: [
      (value) => value.length > 0, 
      'El campo interno no puede estar vacío',
    ],
    dni: [
      (value) => value.length > 0, 
      'El campo dni no puede estar vacío',
    ],
    juez: [
      (value) => value.length > 0, 
      'El campo juez no puede estar vacío',
    ],
    juzgado: [
      (value) => value.length > 0, 
      'El campo juzgado no puede estar vacío',
    ],
    fecha: [
      (value) => value.length !== undefined, 
      'El campo fecha no puede estar vacío',
    ],
    expediente: [
      (value) => value.length > 0, 
      'El campo expediente no puede estar vacío',
    ],
    url: [
      (value) => value.length > 0, 
      'El campo url no puede estar vacío',
    ],
  };

export const RegisterView = () => {

    const clearLoginMsg = useAuthStore(state => state.clearLoginMsg);
    const { loginMsg } = useAuth();

    const { startRegistro } = useAgenda();
    const [ disabledButton, setDisabledButton ] = useState(true);

    const {
        interno,
        dni,
        juez,
        juzgado,
        fechaDate,
        expediente,
        url,
        formState,
        isFormValid,
        internoValid,
        dniValid,
        juezValid,
        juzgadoValid,
        fechaDateValid,
        expedienteValid,
        urlValid,
        onResetForm,
        onInputChange,
        onDateChange
    } = useForm( initialState, formValidations );


    const onSubmit = (e) => {
        e.preventDefault();
        startRegistro( formState );
        onResetForm();
    }

    const onChange = () => {
        if (isFormValid) {
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
    }

    useEffect(() => {
        if (loginMsg !== null) {
            toast.success(`${loginMsg}`, {
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
        <main className="sm:px-0 mt-12 sm:mt-14 w-11/12 mx-auto">
            <form action="" className=" pb-6 rounded-xl" onSubmit={onSubmit} onChange={onChange}>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold text-xl'>Nuevo Registro</h2>
                    <button type="submit" className={`btn-landing text-black font-semibold flex py-3 px-4 items-center bg-amber-500 ${disabledButton ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`} style={{ borderRadius: '9px' }} disabled={ disabledButton }>
                        <p className='mr-1' style={{ fontSize: '15px' }}>Registrar</p>
                        <ArrowIcon />
                    </button>
                </div>
                <div className="sm:flex 2xl:mb-10 sm:mb-12 gap-x-12 mt-12">
                    <div className="sm:w-1/2 mb-6 sm:mb-0 relative inputGroup">
                        <input 
                            className="outline-none border bg-white rounded-lg px-3 py-2 w-full"
                            type='text'
                            name='interno'
                            value={interno}
                            onChange={onInputChange}
                            required
                        />
                        <label className="absolute left-0 p-2 ml-1 text-sky-700" style={{ pointerEvents: 'none', transition: 'all .3s ease' }} htmlFor="interno">Interno *</label>
                    </div>
                    <div className="sm:w-1/2 mb-6 sm:mb-0 relative inputGroup">
                        <input 
                            className="outline-none border bg-white rounded-lg px-3 py-2 w-full"
                            type='number'
                            name='dni'
                            value={dni}
                            onChange={onInputChange}
                            required
                        />
                        <label className="absolute left-0 p-2 ml-1 text-sky-700" style={{ pointerEvents: 'none', transition: 'all .3s ease' }} htmlFor="interno">Número DNI</label>
                    </div>
                </div>
                <div className="sm:flex 2xl:mb-10 sm:mb-12 gap-x-12 mt-12">
                    <div className="sm:w-1/2 mb-6 sm:mb-0 relative inputGroup">
                        <input 
                            className="outline-none border bg-white rounded-lg px-3 py-2 w-full"
                            type='text'
                            name='juez'
                            value={juez}
                            onChange={onInputChange}
                            required
                        />
                        <label className="absolute left-0 p-2 ml-1 text-sky-700" style={{ pointerEvents: 'none', transition: 'all .3s ease' }} htmlFor="interno">Juez *</label>
                    </div>
                    <div className="sm:w-1/2 mb-6 sm:mb-0 relative inputGroup">
                        <input 
                            className="outline-none border bg-white rounded-lg px-3 py-2 w-full"
                            type='text'
                            name='juzgado'
                            value={juzgado}
                            onChange={onInputChange}
                            required
                        />
                        <label className="absolute left-0 p-2 ml-1 text-sky-700" style={{ pointerEvents: 'none', transition: 'all .3s ease' }} htmlFor="interno">Juzgado *</label>
                    </div>
                </div>
                <div className="sm:flex 2xl:mb-10 sm:mb-12 gap-x-12 mt-12">
                    <div className="sm:w-1/2 mb-6 sm:mb-0 relative inputGroup">
                    <DatePicker
                            className='
                            outline-none border bg-white rounded-lg px-3 py-2 w-full'
                            wrapperClassName="relative datepicker"
                            selected={fechaDate}
                            onChange={(e) => onDateChange(e, 'fechaDate')}
                            minDate={new Date()}
                            required
                            dateFormat='Pp'
                            showTimeSelect
                            locale='es'
                            timeCaption="Hora"
                            filterDate={date => date.getDay() !== 0 && date.getDay() !== 6}
                            timeIntervals={5}
                            minTime={setHours(setMinutes(new Date(), 0), 8)}
                            maxTime={setHours(setMinutes(new Date(), 0), 17)}
                            excludeTimes={[
                                setHours(setMinutes(new Date(), 30), 12),
                                setHours(setMinutes(new Date(), 35), 12),
                                setHours(setMinutes(new Date(), 40), 12),
                                setHours(setMinutes(new Date(), 45), 12),
                                setHours(setMinutes(new Date(), 50), 12),
                                setHours(setMinutes(new Date(), 55), 12),
                                setHours(setMinutes(new Date(), 0), 13),
                                setHours(setMinutes(new Date(), 5), 13),
                                setHours(setMinutes(new Date(), 10), 13),
                                setHours(setMinutes(new Date(), 15), 13),
                                setHours(setMinutes(new Date(), 20), 13),
                                setHours(setMinutes(new Date(), 25), 13),
                                setHours(setMinutes(new Date(), 30), 13),
                                setHours(setMinutes(new Date(), 35), 13),
                                setHours(setMinutes(new Date(), 40), 13),
                                setHours(setMinutes(new Date(), 45), 13),
                                setHours(setMinutes(new Date(), 50), 13),
                                setHours(setMinutes(new Date(), 55), 13),
                                setHours(setMinutes(new Date(), 0), 14),
                            ]}
                            
                        />
                        <label className="absolute left-0 p-2 ml-1 text-sky-700 hola" style={{ pointerEvents: 'none', transition: 'all .3s ease' }} htmlFor="interno">Fecha *</label>
                    </div>
                    <div className="sm:w-1/2 mb-6 sm:mb-0 relative inputGroup">
                        <input 
                            className="outline-none border bg-white rounded-lg px-3 py-2 w-full"
                            type='number'
                            name='expediente'
                            value={expediente}
                            onChange={onInputChange}
                            required
                        />
                        <label className="absolute left-0 p-2 ml-1 text-sky-700" style={{ pointerEvents: 'none', transition: 'all .3s ease' }} htmlFor="interno">Número expediente *</label>
                    </div>
                </div>
                <div className="sm:flex 2xl:mb-16 mb-12 gap-x-24">
                    <div className="w-full relative inputGroup">
                        <input 
                            className="outline-none border bg-white rounded-lg px-3 py-2 w-full"
                            type='text'
                            name='url'
                            value={url}
                            onChange={onInputChange}
                            required
                        />
                        <label className="absolute left-0 p-2 ml-1 text-sky-700" style={{ pointerEvents: 'none', transition: 'all .3s ease' }} htmlFor="interno">Enlace URL de la reunión *</label>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </main>
    )
}