import { RegisterItem } from "./RegisterItem"

export const ReportTable = ({ data }) => {
    return(
        <div className="my-12 overflow-hidden sm:rounded-lg">
            <table className='border-collapse w-full divide-y divide-gray-200' style={{ border: 'none' }}>
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
            </table>
        </div>
    )
}