import { StateCreator } from "zustand";
import { ITabRefresh } from "./interface/ITabRefresh";


const createTabSlice: StateCreator<ITabRefresh> = (set, get) => (
    {            
        activeTab: 0,
        getActiveTab()
        {
            return get().activeTab
        },
        setActiveTab(activeTab: any)
        {
            set(() => ({activeTab: activeTab}))
        },

        flagPendingTab: 0,
        getFlagPendingTab()
        {
            return get().flagPendingTab
        },
        setFlagPendingTab(flagPendingTab: any)
        {
            set(() => ({flagPendingTab: flagPendingTab}))
        }
    }   
)

export default createTabSlice