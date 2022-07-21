import create from "zustand";

export const useStore = create((set) => ({
  open: false,
  address: "",
  toggleOpen: () => set((state) => ({ open: !state.open })),
  setAddress: (address) => set(() => ({ address: address })),
}));
