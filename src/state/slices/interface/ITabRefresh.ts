
export interface ITabRefresh
{      
    activeTab: number,
    getActiveTab: () => void
    setActiveTab: (activeTab: boolean) => void  
    
    flagPendingTab: number,
    getFlagPendingTab: () => void
    setFlagPendingTab: (flagPendingTab: boolean) => void
}