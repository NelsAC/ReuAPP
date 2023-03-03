import { toast } from "react-toastify";
import agendaApi from "../api/agendaApi";
import { useAuthStore } from "../store/auth"

export const useAuth = () => {

    const allUsers = useAuthStore(state => state.allUsers);
    const setUser = useAuthStore(state => state.setUser);
    const setUsers = useAuthStore(state => state.setUsers);
    const user = useAuthStore(state => state.user);
    const uid = useAuthStore(state => state.uid);
    const isAuth = useAuthStore(state => state.isAuth);
    const login = useAuthStore(state => state.login);
    const loginMsg = useAuthStore(state => state.loginMsg);
    const setLoginMsg = useAuthStore(state => state.setLoginMsg);
    const clearLoginMsg = useAuthStore(state => state.clearLoginMsg);
    const logout = useAuthStore(state => state.logout);
    const checking = useAuthStore(state => state.checking)

    const startLogin = async ({user, password}) => {

        try {
            checking();
            const { data } = await agendaApi.post('/auth/', { user, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            login(user, data.uid);
            setLoginMsg(data.msg);

        } catch (error) {
            const { data } = error.response;
            setLoginMsg(data.msg);

            setTimeout(() => {
                logout();
                // clearLoginMsg();
            }, 100);
            
        }
    }

    const startLogout = () => {
        localStorage.clear();
        logout();
    }

    const checkAuthToken = async () => {
    
        const token = localStorage.getItem('token');
        if (!token) return logout();

        try {
            
            const { data } = await agendaApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            login(data.user, data.uid);

        } catch (error) {
            localStorage.clear();
            logout();
        }
    
    }

    const getUsers = async () => {

        try {
            
            const { data } = await agendaApi.get('/auth/users');
            const usuarios = data.usuarios;
            setUsers(usuarios);

        } catch (error) {
            console.log('Error en el registro', error);
        }
    }

    const startNewUsuario = async ({ user, password }) => {

        try {
            const { data } = await agendaApi.post('/auth/new', { user, password, rol: 'normal-user' });
            const msg = data.msg;
            if (data.ok) {
                const { __v, _id, password, rol, user } = data;
                setUser( allUsers.concat({ __v, _id, password, rol, user }) );
                toast.success(msg);
            }

        } catch (error) {

            console.log('Error en el registro', error);
            
        }
    }



    return {
        //* properties
        user,
        uid,
        isAuth,
        loginMsg,
        allUsers,

        //* methods
        startLogin,
        checkAuthToken,
        startLogout,
        getUsers,
        startNewUsuario
    }

}