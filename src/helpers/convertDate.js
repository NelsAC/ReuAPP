import { parseISO } from "date-fns";

export const convertDate = ( registros = [] ) => {
    
        return registros.map( registro => {
        
            registro.fecha = parseISO(registro.fecha);
            return registro;

        }); 
}