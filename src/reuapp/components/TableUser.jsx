import { useState } from "react";
import usetable from "../../hooks/useTable";
import { RegisterItemUser } from "./RegisterItemUser";
import { TableFooter } from "./TableFooter";

export const TableUser = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = usetable(data, page, rowsPerPage);

    return(
        <div className="my-12 overflow-hidden sm:rounded-lg">
            <table className='border-collapse w-full divide-y divide-gray-200' style={{ border: 'none' }}>
                <thead className='bg-gray-50 transition rounded-lg'>
                    <tr>
                        <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Usuario</th>
                        <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        slice.map((item) => (
                            <RegisterItemUser key={ item._id } { ...item } />
                        ))
                    }
                </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </div>
    )
}