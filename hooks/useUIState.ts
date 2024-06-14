import { create } from "zustand";

interface UiState {
  homeCategory: string;
  headerImageSrc: string;
  setHomeCategory: (value: string) => void;
  setHeaderImageSrc: (src: string) => void;
}

const useUIState = create<UiState>((set) => ({
  homeCategory: "",
  headerImageSrc:
    "https://images.unsplash.com/photo-1707833558984-3293e794031c",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
