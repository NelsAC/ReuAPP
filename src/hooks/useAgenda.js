import { toast } from "react-toastify";
import agendaApi from "../api/agendaApi";
import { convertDate } from "../helpers/convertDate";
import { useAgendaStore } from "../store/agenda";
import { useAuthStore } from "../store/auth";

export const useAgenda = () => {

    const setRegistros = useAgendaStore(state => state.setRegistros);
    const all = useAgendaStore(state => state.all);
    const setChekingReport = useAgendaStore(state => state.setChekingReport);
    const setNotChekingReport = useAgendaStore(state => state.setNotChekingReport);
    const reportRegisters = useAgendaStore(state => state.reportRegisters);
    const isChekingReport = useAgendaStore(state => state.isChekingReport);

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
                if (data.ok) {
                    const updateAll = all.map( register => register._id === id ? { ...register, estado: data.registro.estado } : register );
                    setRegistros(updateAll);
                }
    
            } catch (error) {
    
                console.log('Error en el registro', error);
    
            }
    }

    //delete register
    const deleteRegister = async (id) => {

        try {

            const { data } = await agendaApi.delete(`/agenda/${id}`);
            if (data.ok) {
                const newAll = all.filter( register => register._id !== id );
                setRegistros(newAll);
                toast.success(data.msg);
            }
        } catch (error) {

            console.log('Error en el registro', error);

        }
    }

    //generar reporte
    const generarReporte = async (desde, hasta) => {
    
        try {
            setChekingReport();
            const { data } = await agendaApi.get(`/agenda/${desde}/${hasta}`);
            setTimeout(() => {
                if (data.ok) {
                    const registers = data.registrosPedidos;
                    setNotChekingReport(registers);
                }
            }, 3000);
            
        } catch (error) {
            
            console.log('Error en la generación de reporte', error);

        }

    }





    return {
        //* properties
        all,
        reportRegisters,
        isChekingReport,
        // todo: add properties refered to register

        //* methods
        startRegistro,
        getRegisters,
        updateRegister,
        deleteRegister,
        generarReporte
    }

}