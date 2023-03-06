import { ArrowIcon, RepeatIcon } from "../../assets"
import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const initialState = {
    startDate: '',
    endDate: ''
}

registerLocale('es', es);

export const StepOne = ({ setStep }) => {

    // localStorage.removeItem('fechaDesde');
    // localStorage.removeItem('fechaHasta');

    
    const disabledDate = document.querySelector('.fondo-blur');
    const [ disabledButton, setDisabledButton ] = useState(true);



        // const { startDate, endDate, onRangeDateChange } = useForm( initialState );
        const [startDate, setStartDate] = useState(null);
        const [endDate, setEndDate] = useState(null);
        const onChange = (dates) => {
          const [start, end] = dates;
          if (start !== null && typeof start !== 'number' ) {
              setStartDate(start.getTime());
              localStorage.setItem('fechaDesde', start.getTime());
          }
          if (end !== null && typeof end !== 'number' ) {
            setEndDate(end.getTime());
            localStorage.setItem('fechaHasta', end.getTime());
          }
          if (start !== null && end !== null) {
            disabledDate.classList.add('show');
            setDisabledButton(false);
          }
        };

        const onClear = () => {
            disabledDate.classList.remove('show');
            setDisabledButton(true);
            setStartDate(null);
            setEndDate(null);
            localStorage.removeItem('fechaDesde');
            localStorage.removeItem('fechaHasta');
        }

    return (
        <>
            <div className='mt-8 w-11/12 mx-auto flex justify-between items-center'>
                <p className='font-bold text-xl'>Selecciona un rango de fechas</p>
                <div className='flex gap-4'>
                    <button type="button" className='btn-landing text-black font-semibold flex py-3 px-4 items-center bg-gray-300' style={{ borderRadius: '9px' }} onClick={onClear}>
                        <RepeatIcon />
                        <p className='ml-1' style={{ fontSize: '15px' }} >Cancelar</p>
                    </button>
                    {/* <button type="button" className='btn-landing text-black font-semibold flex py-3 px-4 items-center bg-gray-300' style={{ borderRadius: '9px' }}>
                    <ArrowIconB />
                    <p className='mr-1' style={{ fontSize: '15px' }}>Atrás</p>
                </button> */}
                    <button type="button" className={`btn-landing text-black font-semibold flex py-3 px-4 items-center bg-amber-500 ${disabledButton ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`} style={{ borderRadius: '9px' }} disabled={disabledButton} onClick={() => setStep(2)}>
                        <p className='mr-1' style={{ fontSize: '15px' }}>Siguiente</p>
                        <ArrowIcon />
                    </button>
                </div>
            </div>
            <div className='mt-12 flex justify-center'>
                <div className="mb-6 sm:mb-0 text-center xs:text-left relative">
                    <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        selectsDisabledDaysInRange
                        inline
                    />
                    <span className="fondo-blur absolute inset-0 bg-red-500 w-full rounded bg-white/30" style={{ height: '250px' }}></span>
                </div>
            </div>
        </>
    )
}