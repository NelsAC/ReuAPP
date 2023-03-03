import { DeleteIcon, EditIcon } from "../../assets";

export const RegisterItemUser = (props) => {

    const { user } = props;

    return (
        <tr className='table-row-items'>
            <td className="table-cell text-md text-center">{user}</td>
            <td className="table-cell text-md text-center">
                <button className="mr-3">
                    <EditIcon />
                </button>
                <button className="">
                    <DeleteIcon />
                </button>
            </td>
        </tr>
    )
}