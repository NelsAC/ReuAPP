import { format } from "date-fns";
import { useMemo, useState } from "react";
import { DeleteIcon, EditIcon, VerIcon } from "../../assets";
import { useAgenda } from "../../hooks/useAgenda";
import { EventModal } from "./EventModal";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

export const RegisterItem = (props) => {

    const { deleteRegister } = useAgenda();

    const { expediente, fecha, interno, juzgado, estado, _id } = props;
    const formatDate = format(fecha, 'dd/MM/yyyy HH:mm');

    const [openModal, setOpenModal] = useState(false);

    const newJuzgado = useMemo(() => {
        return juzgado.length > 12 ? juzgado.substring(0, 12) + "..." : juzgado;
      }, [juzgado]);

    const newInterno = useMemo(() => {
    return interno.length > 20 ? interno.substring(0, 20) + "..." : interno;
    }, [interno]);

    const onDelete = () => {
        MySwal.fire(
            {
                title: '¿Estás seguro?',
                text: "No podrás revertir esta acción",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'rgb(3 105 161)',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            }
        ).then((result) => {
            if (result.isConfirmed) {
                deleteRegister(_id);
            }
        }
        )
    }

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
            <td className="table-cell text-md text-center">{newInterno}</td>
            <td className="table-cell text-md text-center">{newJuzgado}</td>
            <td className="table-cell text-md text-center"><span className={`px-3 py-.5 inline-flex text-xs leading-5 font-semibold rounded ${ estado==='pendiente' ? 'bg-rose-100 text-rose-800' : 'bg-green-100 text-green-800' } capitalize`}>{ estado }</span></td>
            <td className="table-cell text-md text-center">
                <button className="" onClick={ onDelete }>
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