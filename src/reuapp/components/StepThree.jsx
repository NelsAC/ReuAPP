import { NewIcon } from "../../assets/NewIcon"
import { ReportTable } from './ReportTable'
import pdf from '../../assets/pdf.gif';
import { useAgenda } from "../../hooks/useAgenda";


export const StepThree = ({ setStep }) => {

        const { reportRegisters, isChekingReport } = useAgenda();

        const onBack = () => {
            setStep(1);
            localStorage.removeItem('fechaDesde');
            localStorage.removeItem('fechaHasta');
        }
    
        return (
            <>
                <div className='mt-8 w-11/12 mx-auto flex justify-between items-center'>
                    <p className='font-bold text-xl'>Verifica las fechas</p>
                    <div className='flex gap-4'>
                        <button type="button" className='btn-landing text-black font-semibold flex py-3 px-4 items-center bg-amber-500' style={{ borderRadius: '9px' }} onClick={ onBack }>
                            <p className='mr-1' style={{ fontSize: '15px' }}>Nuevo Reporte</p>
                            <NewIcon />
                        </button>
                    </div>
                </div>
                {
                    isChekingReport ?
                    <div className='mt-12 flex justify-center flex-col items-center'>
                        <img className='w-44' src={ pdf } alt="" />
                        <p className='font-semibold'>Generando PDF...</p>
                        <p className=''>Esto puede tomar algunos segundos</p>
                    </div> :
                    <ReportTable  data={ reportRegisters } />
                }
            </>
        )
    }