import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useAgendaStore = create((set) => ({
    all: [],
    isChekingReport: false,
    reportRegisters: [],

    //* methods
    setRegistros: (registros) => set({ all: registros }),

    setChekingReport: () => set({ isChekingReport: true }),

    setNotChekingReport: (registers) => set({ isChekingReport: false, reportRegisters: registers }),
}));

mountStoreDevtool('Store2', useAgendaStore);