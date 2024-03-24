import {create} from 'zustand';

interface AppState {
    fileId: string | null;
    setFileId: (fileId: string | null) => void;

    filename: string;
    setFilename: (filename: string) => void;

    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: (open: boolean) => void;

    isRenameModalOpen: boolean;
    setIsRenameModalOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
    fileId: null,
    setFileId: (fileId) => set((state) => ({ ...state, fileId })),

    filename: "",
    setFilename: (filename) => set((state) => ({ ...state, filename })),

    isDeleteModalOpen: false, // Ensure it's initially set to false
    setIsDeleteModalOpen: (open) => set((state) => ({ ...state, isDeleteModalOpen: open })),

    isRenameModalOpen: false,
    setIsRenameModalOpen: (open) => set((state) => ({ ...state, isRenameModalOpen: open }))
}));