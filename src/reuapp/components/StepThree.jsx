import { NewIcon } from "../../assets/NewIcon"

import pdf from '../../assets/pdf.gif';

export const StepThree = ({ setStep }) => {
    
        return (
            <>
                <div className='mt-8 w-11/12 mx-auto flex justify-between items-center'>
                    <p className='font-bold text-xl'>Verifica las fechas</p>
                    <div className='flex gap-4'>
                        <button type="button" className='btn-landing text-black font-semibold flex py-3 px-4 items-center bg-amber-500' style={{ borderRadius: '9px' }} onClick={() => setStep(1)}>
                            <p className='mr-1' style={{ fontSize: '15px' }}>Nuevo Reporte</p>
                            <NewIcon />
                        </button>
                    </div>
                </div>
                <div className='mt-12 flex justify-center flex-col items-center'>
                    <img className='w-44' src={ pdf } alt="" />
                    <p className='font-semibold'>Generando PDF...</p>
                    <p className=''>Esto puede tomar algunos segundos</p>
                </div>
            </>
        )
    }