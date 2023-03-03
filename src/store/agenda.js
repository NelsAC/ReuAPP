import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useAgendaStore = create((set) => ({
    all: [],

    //* methods
    setRegistros: (registros) => set({ all: registros }),
}));

mountStoreDevtool('Store2', useAgendaStore);