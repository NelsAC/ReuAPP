import { AgendaIcon, CheckCircle, CheckIcon, PdfSvg, RegIcon, ReportIcon, WarnCircle } from "../../assets";
import { RegisterItem } from "./RegisterItem";
import logo from '../../assets/logo.png';
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useAuth } from "../../hooks/useAuth";

export const ReportTable = ({ data }) => {

    const { user } = useAuth();

    const inicialLocalStorage = parseInt(localStorage.getItem('fechaDesde'));
    const finalLocalStorage = parseInt(localStorage.getItem('fechaHasta'));

    return(
        <div className="my-12 overflow-hidden sm:rounded-lg">
            <div className="flex items-end hover:cursor-pointer hover:underline text-sm mb-4 w-fit">
                <p className="mr-2">Descargar PDF</p>
                <PdfSvg />
            </div>
            <div className=''>
                <div className='py-12 px-8 border' style={{ height: '790px' }}>
                    <div className="flex w-full justify-center items-center">
                        <figure className='w-8'>
                            <img className='w-full mr-3' src={logo} alt='Reuapp' />
                        </figure>
                        <h1 className='text-xl font-bold text-sky-700'>Reu<span className='text-black'>APP</span></h1>
                    </div>
                    <div className="text-left mt-8 flex">
                        <div className="mr-1 text-left flex flex-col gap-2">
                            <p className='text-sm font-bold'>Generado por</p>
                            <p className='text-sm font-bold'>Generado el</p>
                            <p className='text-sm font-bold'>Registros desde</p>
                            <p className='text-sm font-bold'>Registros hasta</p>
                        </div>
                        <div className="mr-4 text-right flex flex-col gap-2">
                            <p className='text-sm font-bold'>:</p>
                            <p className='text-sm font-bold'>:</p>
                            <p className='text-sm font-bold'>:</p>
                            <p className='text-sm font-bold'>:</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-sm font-normal capitalize'>{ user }.</p>
                            <p className='text-sm font-normal dateSteps'>{ format(new Date(), "EEEE, dd 'de' MMMM 'del' yyyy 'a las' k:mm:ss", { locale: es }) }.</p>
                            <p className='text-sm font-normal dateSteps'>{ format(inicialLocalStorage, "EEEE, dd 'de' MMMM 'del' yyyy", { locale: es }) }.</p>
                            <p className='text-sm font-normal dateSteps'>{ format(finalLocalStorage, "EEEE, dd 'de' MMMM 'del' yyyy", { locale: es }) }.</p>
                        </div>
                    </div>
                    <div className="w-full mt-12 grid gap-4 grid-cols-2">
                        <div className='border rounded py-4 px-3 flex flex-col justify-between' style={{ height: '135px' }}>
                            <div className="flex justify-between items-center">
                                <p className="text-green-500">
                                    <CheckCircle />
                                </p>
                                <p className='text-sky-700 font-semibold'>Verificados</p>
                            </div>
                            <div>
                                <p className='text-2xl font-bold text-gray-600 mb-1'>356</p>
                                <p className="font-normal text-sm text-gray-500">Registros verificados</p>
                            </div>
                        </div>
                        <div className='border rounded py-4 px-3 flex flex-col justify-between' style={{ height: '135px' }}>
                            <div className="flex justify-between items-center">
                                <p className="text-rose-500">
                                    <WarnCircle />
                                </p>
                                <p className='text-sky-700 font-semibold'>Pendientes</p>
                            </div>
                            <div>
                                <p className='text-2xl font-bold text-gray-600 mb-1'>356</p>
                                <p className="font-normal text-sm text-gray-500">Registros pendientes</p>
                            </div>
                        </div>
                        <div className='border rounded col-span-2 w-full py-4 px-3 flex flex-col justify-between' style={{ height: '135px' }}>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-700">
                                    <RegIcon />
                                </p>
                                <p className='text-sky-700 font-semibold'>Total de registros</p>
                            </div>
                            <div>
                                <p className='text-2xl font-bold text-gray-600 mb-1'>356</p>
                                <p className="font-normal text-sm text-gray-500">Entre verificados y pendientes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}