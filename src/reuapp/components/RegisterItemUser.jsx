import { DeleteIcon, EditIcon } from "../../assets";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useAuth } from "../../hooks/useAuth";

const MySwal = withReactContent(Swal)

export const RegisterItemUser = (props) => {

    const { user, _id } = props;

    const { deleteUser, updateUser } = useAuth();

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
                deleteUser(_id);
            }
        }
        )
    }

    const onEdit = () => {
        updateUser(_id)
    }

    return (
        <tr className='table-row-items'>
            <td className="table-cell text-md text-center">{user}</td>
            <td className="table-cell text-md text-center">
                <button className="mr-3" onClick={ onEdit }>
                    <EditIcon />
                </button>
                <button className="" onClick={ onDelete }>
                    <DeleteIcon />
                </button>
            </td>
        </tr>
    )
}