
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { ArrowIcon, ArrowIconB, CheckIcon, DateIcon, EmptyIcon, PdfIcon, RegisterIcon, RepeatIcon } from '../../assets';
import { format } from "date-fns";
import { StepOne } from "../components/StepOne";
import { StepTwo } from "../components/StepTwo";
import { StepThree } from "../components/StepThree";





export const ReportView = () => {

    const [step, setStep] = useState(1);

    return (
        <div className='sm:px-0 mt-12 sm:mt-14 w-11/12 mx-auto'>
            <div className='w-11/12 mx-auto'>
                <div className='flex justify-between relative items-center'>
                    <div className='flex flex-col items-center text-center w-fit' style={{ background: '#fbfcfd' }}>
                        <div
                            to='/register'
                            className={`rounded-full p-2 bg-amber-500 text-white`}
                        >
                            <DateIcon />
                        </div>
                        <p className={`font-semibold text-sm ${ step===1 ? 'text-black' : 'text-gray-400'}`}>Selecciona</p>
                    </div>
                    <div className={`h-px w-full ${ step===2 || step===3  ? 'bg-amber-500' : 'bg-gray-200'} -mt-4 transition-all duration-300 ease-in-out`}></div>
                    <div className='flex flex-col items-center text-center w-fit' style={{ background: '#fbfcfd' }}>
                        <div
                            to='/register'
                            className={`rounded-full p-2 ${ step===2 || step===3 ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-400' } transition-all duration-500 ease-in-out`}
                        >
                            <CheckIcon />
                        </div>
                        <p className={`font-semibold text-sm ${ step===2 ? 'text-black' : 'text-gray-400'}`}>Verifica</p>
                    </div>
                    <div className={`h-px w-full ${ step===3  ? 'bg-amber-500' : 'bg-gray-200'} -mt-4 transition-all duration-300 ease-in-out`}></div>
                    <div className='flex flex-col items-center text-center w-fit' style={{ background: '#fbfcfd' }}>
                        <div
                            to='/register'
                            className={`rounded-full p-2 ${ step===3 ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-400' } transition-all duration-500 ease-in-out`}
                        >
                            <PdfIcon />
                        </div>
                        <p className={`font-semibold text-sm ${ step===3 ? 'text-black' : 'text-gray-400'}`}>Genera</p>
                    </div>
                </div>
            </div>

            {
                step === 1 && <StepOne setStep={setStep} />
            }
            {
                step === 2 && <StepTwo setStep={setStep} />
            }
            {
                step === 3 && <StepThree setStep={setStep} />
            }

            {/* <TableUser data={ allUsers } rowsPerPage={ 4 } /> */}
        </div>
    )
}