import { format } from "date-fns";
import { useState } from "react";
import { DeleteIcon, EditIcon, VerIcon } from "../../assets";
import { EventModal } from "./EventModal";

export const RegisterItem = (props) => {
    const { expediente, fecha, interno, juzgado, estado } = props;
    const formatDate = format(fecha, 'dd/MM/yyyy HH:mm');

    const [openModal, setOpenModal] = useState(false);

    return (
        <tr className='table-row-items'>
            <td className="table-cell">
                <div className="flex items-center text-md justify-around">
                    <div className="">
                        <p className="font-semibold text-md text-left">{expediente}</p>
                        <p className="text-xs text-gray-600">{ formatDate }</p>
                    </div>
                </div>
            </td>
            <td className="table-cell text-md text-center">{interno}</td>
            <td className="table-cell text-md text-center">{juzgado}</td>
            <td className="table-cell text-md text-center"><span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${ estado==='pendiente' ? 'bg-rose-100 text-rose-800' : 'bg-green-100 text-green-800' } capitalize`}>{ estado }</span></td>
            <td className="table-cell text-md text-center">
                <button className="mr-3">
                    <EditIcon />
                </button>
                <button className="">
                    <DeleteIcon />
                </button>
            </td>
            <td className="table-cell">
                <button className="hover:text-black text-sky-700" onClick={() => setOpenModal(true)}>
                    <VerIcon />
                </button>
            </td>
            <EventModal visible={openModal} setVisible={setOpenModal} data={props} />
        </tr>
    )
}