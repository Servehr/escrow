import { StateCreator } from "zustand";
import { IStartTransaction } from "./interface/IStartTransaction";


const createStartTransactionSlice: StateCreator<IStartTransaction> = (set, get) => (
    {            
        as: "",
        getAs()
        {
            return get().as
        },
        setAs(as: any)
        {
            set(() => ({ as: as }))
        },
        
        payer: "",
        getPayer()
        {
            return get().payer
        },
        setPayer(payer: any)
        {
            set(() => ({ payer: payer }))
        },
        
        category: -1,
        getCategory()
        {
            return get().category
        },
        setCategory(category: any)
        {
            set(() => ({ category: category }))
        },
        
        others: false,
        getOthers()
        {
            return get().others
        },
        setOthers(others: any)
        {
            set(() => ({ others: others }))
        },
        
        othersName: "",
        getOthersName()
        {
            return get().othersName
        },
        setOthersName(othersName: any)
        {
            set(() => ({ othersName: othersName }))
        },

        serviceName: "",
        getServiceName()
        {
            return get().serviceName
        },
        setServiceName(serviceName: any)
        {
            set(() => ({ serviceName: serviceName }))
        },

        amount: "",
        getAmount()
        {
            return get().amount
        },
        setAmount(amount)
        {
            set(() => ({ amount: amount }))
        },

        description: "",
        getDescription()
        {
            return get().description
        },
        setDescription(description)
        {
            set(() => ({ description: description }))
        },

        agreement: "",
        getAgreement()
        {
            return get().agreement
        },
        setAgreement(agreement)
        {
            set(() => ({ agreement: agreement }))
        },

        startDate: "",
        getStartDate()
        {
            return get().startDate
        },
        setStartDate(startDate)
        {
            set(() => ({ startDate: startDate }))
        },

        endDate: "",
        getEndDate()
        {
            return get().endDate
        },
        setEndDate(endDate)
        {
            set(() => ({ endDate: endDate }))
        },

        images: [],
        getImages()
        {
            return get().images
        },
        setImages(x: string)
        { 
            console.log(this.images)
            set((state) => ({ images: [...state.images, x] }))
        },
        removeImages(image: string)
        {            
            set(() => ({ images: this.images.filter(function(img)
            {
                return img != image
            }) }))
        },
        removeAllImages()
        {
            set(() => ({ images: [] }))
        }
    }   
)

export default createStartTransactionSlice