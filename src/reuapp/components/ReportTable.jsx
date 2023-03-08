import { PdfSvg } from "../../assets";
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
            <table className='border-collapse w-full divide-y divide-gray-200 text-center bg-white' style={{ border: 'none' }}>
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
                    {/* <div>
                        <thead className='bg-gray-50 transition rounded-lg'>
                            <tr>
                                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Expediente</th>
                                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Interno</th>
                                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Juzgado</th>
                                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Estado</th>
                                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Acciones</th>
                                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Ver</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                data.map((item) => (
                                    <RegisterItem key={item._id} {...item} />
                                ))
                            }
                        </tbody>
                    </div> */}
                </div>
            </table>
        </div>
    )
}