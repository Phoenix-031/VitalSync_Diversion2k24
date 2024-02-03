import {create} from 'zustand';

interface CounterStore {
  count: number;
  isResearcher: boolean;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<CounterStore>(set => ({
  isResearcher: true,
  count: 0,
  increment: () => set(state => ({count: state.count + 1})),
  decrement: () => set(state => ({count: state.count - 1})),
}));

export default useStore;
