import { createStore, useStore } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { zustandMMKVStorage } from '../../configs/zustandMMKV';

interface UserState {
  user: {
    phoneNumber: string;
  };
  setPhoneNumber: (phoneNumber: string) => void;
};

const initialUserState = {
  phoneNumber: '',
};

const persistConfig = {
  name: 'user-store',
  storage: createJSONStorage(() => zustandMMKVStorage),
};

export const userStore = createStore<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: initialUserState,
        setPhoneNumber: (phoneNumber) => set((state) => ({
          user: { ...state, phoneNumber }
        })),
      }),
      persistConfig,
    ),
  ),
);

export function useUsertore<T>(
  selector?: (state: UserState) => T,
  equals?: (a: T, b: T) => boolean
) {
  return useStore(userStore, selector!, equals);
};
