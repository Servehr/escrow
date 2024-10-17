import { create } from 'zustand'
import createProductSlice from './slices/ProductSlice'
import { persist } from 'zustand/middleware'
import createAuthSlice from './slices/AuthSlice';


export const appStore = create<any, [ ['zustand/persist', any], ['zustand/devtools', never] ] >(persist((...a) => 
(
    {
        ...createProductSlice(...a),
        ...createAuthSlice(...a),
    }
), { name: 'escrow' }));
