import { create } from 'zustand';

type Store = {
  isModal: boolean;
  setIsModal: () => void;
};

export const useModalStore = create<Store>()((set) => ({
  isModal: false,
  setIsModal: () => set((state) => ({ isModal: !state.isModal })), // Toggle the modal state
}));
