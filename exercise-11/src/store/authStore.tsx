import { create } from 'zustand'

interface AuthStore {
    email: string | null
    setEmail: (email: string) => void
    clearEmail: () => void
}

export const useAuthStore = create<AuthStore>((set: any) => ({
    email: null,
    setEmail: (email: string) => set({ email }),
    clearEmail: () => set({ email: null }),
}))
