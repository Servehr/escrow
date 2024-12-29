export interface ITransactionStart
{
    category: number
    serviceName: string
    amount: string
    description: string
    agreement: string
    startDate: string
    endDate: string
    images: string[]
}

export const IStartTransactionInitialData = 
{
    category: -1,
    serviceName: "",
    amount: "",
    description: "",
    agreement: "",
    startDate: Date.now(),
    endDate: Date.now(),
    images: []
}

export interface IStartTransaction
{    
    as: string
    getAs: () => void
    setAs: (as: string) => void

    payer: string
    getPayer: () => void
    setPayer: (payer: string) => void

    category: number
    getCategory: () => void
    setCategory: (category: number) => void

    others: boolean
    getOthers: () => void
    setOthers: (category: boolean) => void

    othersName: string
    getOthersName: () => void
    setOthersName: (category: string) => void

    serviceName: string
    getServiceName:  () => void
    setServiceName:  (serviceName: string) => void

    amount: string
    getAmount:  () => void
    setAmount:  (amount: string) => void

    description: string
    getDescription:  () => void
    setDescription:  (description: string) => void

    agreement: string
    getAgreement:  () => void
    setAgreement:  (agreement: string) => void

    startDate: string
    getStartDate:  () => void
    setStartDate:  (startDate: string) => void

    endDate: string
    getEndDate:  () => void
    setEndDate:  (endDate: string) => void

    images: any[]
    getImages:  () => void
    setImages:  (images: any) => void
    removeImages:  (image: string) => void
    removeAllImages:  () => void
}