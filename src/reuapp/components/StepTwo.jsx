import { ArrowIcon, ArrowIconB } from "../../assets"

export const StepTwo = ({ setStep }) => {
    
        return (
            <>
                <div className='mt-8 w-11/12 mx-auto flex justify-between items-center'>
                    <p className='font-bold text-xl'>Verifica las fechas</p>
                    <div className='flex gap-4'>
                        <button type="button" className='btn-landing text-black font-semibold flex py-3 px-4 items-center bg-gray-300' style={{ borderRadius: '9px' }} onClick={ ()=> setStep(1) }>
                            <ArrowIconB />
                            <p className='ml-1' style={{ fontSize: '15px' }}>Atrás</p>
                        </button>
                        <button type="button" className='btn-landing text-black font-semibold flex py-3 px-4 items-center bg-amber-500' style={{ borderRadius: '9px' }} onClick={() => setStep(3)}>
                            <p className='mr-1' style={{ fontSize: '15px' }}>Siguiente</p>
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
                <div className='mt-12 flex justify-center'>
                    <div className="flex gap-4 w-full">
                        <div className="w-full py-12 border rounded-lg bg-white grid place-content-center text-center">
                            <p className='font-semibold text-lg uppercase mb-3'>Fecha inicial</p>
                            <span>Jueves, 12 de abril del 2023</span>
                        </div>
                        <div className="w-full py-12 border rounded-lg bg-white grid place-content-center text-center">
                            <p className='font-semibold text-lg uppercase mb-3'>Fecha Final</p>
                            <span>Jueves, 18 de abril del 2023</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }