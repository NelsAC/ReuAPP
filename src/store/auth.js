import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useAuthStore = create((set) => ({
    allUsers: [],
    loginMsg: null,
    uid: null,
    isAuth: 'not-authenticated',
    typeMsg: null,

    setUser: (newArray) => set({ allUsers: newArray }),
    setLoginMsg: (loginMsg) => set({ loginMsg }),
    setUid: (uid) => set({ uid }),
    
    login: (user, uid) => {
        set({ user, uid, isAuth: 'authenticated' });
    },
    logout: () => {
        set({ user: null, uid: null, isAuth: 'not-authenticated' });
    },
    clearLoginMsg: () => {
        set({ loginMsg: null })
    },
    checking: () => {
        set({ isAuth: 'checking' })
    },

    setUsers: (users) => set({ allUsers: users }),
}));

mountStoreDevtool('Store1', useAuthStore);
