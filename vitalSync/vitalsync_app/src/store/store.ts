import {create} from 'zustand';

interface CounterStore {
  count: number;
  isNormalUser: boolean;
  setWalletAddress: (address: string) => void;
  walletAddress: string | null;
  isResearcher: boolean;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<CounterStore>(set => ({
  isResearcher: true,
  isNormalUser: true,
  walletAddress: null,
  setWalletAddress: (address: string) => set({walletAddress: address}),
  count: 0,
  increment: () => set(state => ({count: state.count + 1})),
  decrement: () => set(state => ({count: state.count - 1})),
}));

export default useStore;
