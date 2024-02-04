import {create} from 'zustand';

interface CounterStore {
  isNormalUser: boolean;
  isDoctor: boolean;
  setWalletAddress: (address: string) => void;
  walletAddress: string | null;
  isResearcher: boolean;
  setResearcher: () => void;
  setDoctor: () => void;
  setNormalUser: () => void;
}

const useStore = create<CounterStore>(set => ({
  isDoctor: false,
  isResearcher: false,
  isNormalUser: true,
  walletAddress: null,
  setNormalUser: () =>
    set(state => ({...state, isNormalUser: !state.isNormalUser})),
  setResearcher: () =>
    set(state => ({...state, isResearcher: !state.isResearcher})),
  setDoctor: () => set(state => ({...state, isDoctor: !state.isDoctor})),

  setWalletAddress: (address: string) => set({walletAddress: address}),
}));

export default useStore;
