import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ArrowIcon, ArrowIconB } from "../../assets"
import { useAgenda } from "../../hooks/useAgenda";

export const StepTwo = ({ setStep }) => {

    const { generarReporte } = useAgenda();

    const inicialLocalStorage = parseInt(localStorage.getItem('fechaDesde'));
    const finalLocalStorage = parseInt(localStorage.getItem('fechaHasta'));

    const fechaInicial = format(inicialLocalStorage, "EEEE, dd 'de' MMMM 'del' yyyy", { locale: es });
    const fechaFinal = format(finalLocalStorage, "EEEE, dd 'de' MMMM 'del' yyyy", { locale: es });
    

    const onBack = () => {
        setStep(1);
        localStorage.removeItem('fechaDesde');
        localStorage.removeItem('fechaHasta');
    }

    const onNext = () => {
        setStep(3);
        generarReporte( localStorage.getItem('fechaDesde'), localStorage.getItem('fechaHasta') );
    }
    
        return (
            <>
                <div className='mt-8 w-11/12 mx-auto flex justify-between items-center'>
                    <p className='font-bold text-xl'>Verifica las fechas</p>
                    <div className='flex gap-4'>
                        <button type="button" className='btn-landing text-black font-semibold flex py-3 px-4 items-center bg-gray-300' style={{ borderRadius: '9px' }} onClick={ onBack }>
                            <ArrowIconB />
                            <p className='ml-1' style={{ fontSize: '15px' }}>Atrás</p>
                        </button>
                        <button type="button" className='btn-landing text-black font-semibold flex py-3 px-4 items-center bg-amber-500' style={{ borderRadius: '9px' }} onClick={ onNext }>
                            <p className='mr-1' style={{ fontSize: '15px' }}>Siguiente</p>
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
                <div className='mt-12 flex justify-center'>
                    <div className="flex gap-4 w-full">
                        <div className="w-full py-12 border rounded-lg bg-white grid place-content-center text-center">
                            <p className='font-semibold text-lg uppercase mb-3'>Fecha inicial</p>
                            <span className='dateSteps'>{ fechaInicial }</span>
                        </div>
                        <div className="w-full py-12 border rounded-lg bg-white grid place-content-center text-center">
                            <p className='font-semibold text-lg uppercase mb-3'>Fecha Final</p>
                            <span className='dateSteps'>{ fechaFinal }</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }