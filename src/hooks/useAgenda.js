import { toast } from "react-toastify";
import agendaApi from "../api/agendaApi";
import { convertDate } from "../helpers/convertDate";
import { useAgendaStore } from "../store/agenda";
import { useAuthStore } from "../store/auth";

export const useAgenda = () => {

    const setRegistros = useAgendaStore(state => state.setRegistros);
    const all = useAgendaStore(state => state.all);

    const startRegistro = async ({interno, dni='', juez, juzgado, fechaDate, expediente, url}) => {

        try {
            const {user} = useAuthStore.getState();
            const generado = new Date().getTime();
            const fecha = fechaDate.getTime();
            const { data } = await agendaApi.post('/agenda/new', { user, generado, interno, dni, juez, juzgado, fecha, expediente, url });
            const msg = data.msg;
            if (data.ok) {
                toast.success(msg);
            }

        } catch (error) {

            console.log('Error en el registro', error);
            
        }
    }

    //get all registers
    const getRegisters = async () => {

        try {

            const { data } = await agendaApi.get('/agenda/registros');
            const registros = data.registros;
            setRegistros(registros);

        } catch (error) {

            console.log('Error en el registro', error);

        }
    }

    //update register status
    const updateRegister = async (id) => {
            
            try {
    
                const { data } = await agendaApi.put(`/agenda/${id}`);
                const updateAll = all.map( register => register._id === id ? { ...register, estado: "verificado" } : register );
                setRegistros(updateAll);
    
            } catch (error) {
    
                console.log('Error en el registro', error);
    
            }
    }




    return {
        //* properties
        all,
        // todo: add properties refered to register

        //* methods
        startRegistro,
        getRegisters,
        updateRegister
    }

}